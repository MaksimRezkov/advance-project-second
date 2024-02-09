export function validateAge (value: number): string | undefined {
  if (value <= 0) return 'Некорректный возраст';
  if (!value) return 'Нужно указать возраст';
};

export function validateCountry (value: string): string | undefined {
  if (!value) return 'Нужно указать страну';
};

export function validateFirstname (value: string): string | undefined {
  if (!value) return 'Нужно указать имя';
};

export function validateLastname (value: string): string | undefined {
  if (!value) return 'Нужно указать фамилию';
};
