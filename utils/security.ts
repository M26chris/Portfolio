export interface SecurityConfig {
  maxAttempts: number;
  timeWindow: number;
  minScore: number;
}

export const securityConfig: SecurityConfig = {
  maxAttempts: 3,
  timeWindow: 900000, // 15 minutes
  minScore: 0.5
};

export class AdvancedSecurity {
  private static attempts = new Map<string, number[]>();
  private static blacklist = new Set<string>();

  static checkRateLimit(identifier: string): boolean {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier) || [];
    
    const recentAttempts = userAttempts.filter(time => now - time < securityConfig.timeWindow);
    
    if (recentAttempts.length >= securityConfig.maxAttempts) {
      if (recentAttempts.length >= securityConfig.maxAttempts * 2) {
        this.blacklist.add(identifier);
      }
      return false;
    }
    
    recentAttempts.push(now);
    this.attempts.set(identifier, recentAttempts);
    return true;
  }

  static isBlacklisted(identifier: string): boolean {
    return this.blacklist.has(identifier);
  }

  static validateRecaptchaScore(score: number): boolean {
    return score >= securityConfig.minScore;
  }

  static sanitizeInput(input: string, maxLength: number = 1000): string {
    if (typeof input !== 'string') return '';
    
    return input
      .replace(/[<>]/g, '')
      .replace(/(javascript|vbscript|data):/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .replace(/expression\(/gi, '')
      .trim()
      .substring(0, maxLength);
  }

  static generateFingerprint(): string {
    const components = [
      navigator.userAgent,
      navigator.language,
      screen.colorDepth.toString(),
      (screen.width * screen.height).toString(),
      new Date().getTimezoneOffset().toString()
    ];
    
    return btoa(components.join('|')).substring(0, 32);
  }

  static validateEmail(email: string): { isValid: boolean; reason?: string } {
    if (!email) return { isValid: false, reason: 'Email required' };
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { isValid: false, reason: 'Invalid email format' };
    }
    
    const disposableDomains = [
      'tempmail.com', 'guerrillamail.com', 'mailinator.com', 
      '10minutemail.com', 'throwaway.com', 'fake.com', 'yopmail.com'
    ];
    
    const domain = email.split('@')[1].toLowerCase();
    if (disposableDomains.some(d => domain.includes(d))) {
      return { isValid: false, reason: 'Disposable emails not allowed' };
    }
    
    return { isValid: true };
  }

  static hasXSSAttempt(input: string): boolean {
    const xssPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /expression\(/gi,
      /vbscript:/gi
    ];
    
    return xssPatterns.some(pattern => pattern.test(input));
  }
}