const BASE_URL = 'http://127.0.0.1:3000';

interface ICar {
  name: string;
  color: string;
  id: number;
}

const getCars: () => Promise<ICar[] | null> = async () => {
  try {
    const response = await fetch(`${BASE_URL}/garage`);
    if (!response.ok) {
      throw new Error('Failed to fetch cars');
    }
    const data = await response.json();
    return data as ICar[];
  } catch (error) {
    console.error('Error fetching cars: ', error);
    return null;
  }
};

const getCarById: (id: number) => Promise<ICar | null> = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/garage/${id}`);
    if (response.status === 404) {
      throw new Error('Car NOT FOUND');
    }
    if (!response.ok) {
      throw new Error('Failed to fetch car');
    }
    const data = await response.json();
    return data as ICar;
  } catch (error) {
    console.error('Error fetching car: ', error);
    return null;
  }
};

const createCar: (name: string, color: string) => Promise<ICar | null> = async (
  name,
  color,
) => {
  try {
    const response = await fetch(`${BASE_URL}/garage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, color }),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch cars');
    }
    const data = await response.json();
    return data as ICar;
  } catch (error) {
    console.error('Error creating car: ', error);
    return null;
  }
};

const removeCar: (id: number) => void = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/garage/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch car');
    }
    if (response.status === 404) {
      throw new Error('Car NOT FOUND');
    }
  } catch (error) {
    console.error('Error deleting car: ', error);
  }
};

const updateCar: (car: ICar) => Promise<ICar> = async (car) => {
  try {
    const response = await fetch(`${BASE_URL}/garage/}${car.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: car.name, color: car.color }),
    });
    if (!response.ok) {
      throw new Error('Failed to update car');
    }
    if (response.status === 404) {
      throw new Error('Car NOT FOUND');
    }
    const data = await response.json();
    return data as ICar;
  } catch (error) {
    console.error('Error deleting car: ', error);
    throw error;
  }
};

export { getCarById, getCars, createCar, removeCar, updateCar, ICar };
