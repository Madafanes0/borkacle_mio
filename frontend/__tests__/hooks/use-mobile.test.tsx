import { renderHook, act } from '@testing-library/react'
import { useIsMobile } from '@/hooks/use-mobile'

let listeners: Function[] = []

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn((event, callback) => {
      listeners.push(callback)
    }),
    removeEventListener: jest.fn((event, callback) => {
      listeners = listeners.filter(listener => listener !== callback)
    }),
    dispatchEvent: jest.fn(),
  })),
})

describe('useIsMobile hook', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
    listeners = []
  })

  it('should return false for desktop viewport (width >= 768px)', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 1024,
    })

    const { result } = renderHook(() => useIsMobile())
    
    expect(result.current).toBe(false)
  })

  it('should return true for mobile viewport (width < 768px)', () => {
    // Mock window.innerWidth for mobile
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 500,
    })

    const { result } = renderHook(() => useIsMobile())
    
    expect(result.current).toBe(true)
  })

  it('should respond to changes in viewport size', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 1024,
    })

    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)

    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        value: 500,
      })
      
      if (listeners.length > 0) {
        listeners.forEach(listener => listener())
      }
    })
    
    expect(result.current).toBe(true)
  })
}) 