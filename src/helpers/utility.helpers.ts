export const getNestedValue = <T>(values: T, path: string): unknown => {
  return path.split('.').reduce((acc: unknown, key: string) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
  }, values as unknown);
};
