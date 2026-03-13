// Design Tokens - Single source of truth for design system
// Dark mode color palette
export const tokens = {
  colors: {
    primary: {
      900: '#020617', // Near black
      800: '#0f172a', // Dark slate
      700: '#1e293b', // Slate
      600: '#3b82f6', // Blue
      500: '#60a5fa', // Light blue
    },
    accent: '#22d3ee', // Cyan
    neutral: {
      100: '#f1f5f9', // Off-white
      200: '#cbd5e1', // Light slate
      300: '#64748b', // Slate gray
    },
    success: '#10b981', // Emerald
    error: '#ef4444',   // Red
  },
  spacing: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    6: '24px',
    8: '32px',
    12: '48px',
    16: '64px',
    24: '96px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
  fontSize: {
    xs: ['12px', '16px'],
    sm: ['14px', '20px'],
    base: ['16px', '24px'],
    lg: ['18px', '28px'],
    xl: ['20px', '28px'],
    '2xl': ['24px', '32px'],
    '3xl': ['30px', '36px'],
    '4xl': ['36px', '40px'],
    '5xl': ['48px', '48px'],
    '6xl': ['60px', '60px'],
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  transition: {
    fast: '150ms ease',
    normal: '200ms ease',
    slow: '300ms ease',
  },
} as const;

export type Tokens = typeof tokens;
