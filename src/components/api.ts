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

const removeCar: (id: number) => Promise<void> = async (id) => {
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
    const response = await fetch(`${BASE_URL}/garage/${car.id}`, {
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

const startCarEngine: (
  id: number,
) => Promise<{ velocity: number; distance: number } | null> = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/engine?id=${id}&status=started`, {
      method: 'PATCH',
    });
    if (!response.ok) {
      throw new Error('Failed to start car engine');
    }
    const data = await response.json();
    return data as { velocity: number; distance: number };
  } catch (error) {
    console.error('Error starting car engine: ', error);
    return null;
  }
};

const stopCarEngine: (
  id: number,
) => Promise<{ velocity: number; distance: number } | null> = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/engine?id=${id}&status=stopped`, {
      method: 'PATCH',
    });

    if (!response.ok) {
      throw new Error('Failed to stop car engine');
    }

    const data = await response.json();
    return data as { velocity: number; distance: number };
  } catch (error) {
    console.error('Error stopping car engine: ', error);
    return null;
  }
};

const switchCarEngineToDriveMode: (carId: number) => Promise<boolean> = async (
  carId,
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/engine?id=${carId}&status=drive`,
      {
        method: 'PATCH',
      },
    );
    const data = await response.json();

    if (response.status === 400) {
      throw new Error(
        'Wrong parameters: "id" should be any positive number, "status" should be "started", "stopped" or "drive"',
      );
    }

    if (response.status === 404) {
      throw new Error(
        'Engine parameters for car with such id was not found in the garage. Have you tried to set engine status to "started" before?',
      );
    }

    if (response.status === 429) {
      throw new Error(
        "Drive already in progress. You can't run drive for the same car twice while it's not stopped.",
      );
    }

    if (response.status === 500) {
      throw new Error(
        "Car has been stopped suddenly. It's engine was broken down.",
      );
    }

    if (!response.ok) {
      throw new Error(data.message || 'Failed to switch engine to drive mode');
    }

    return data.success || false;
  } catch (error) {
    console.error('Error switching car engine to drive mode:', error);
    return false;
  }
};

export {
  getCarById,
  getCars,
  createCar,
  removeCar,
  updateCar,
  startCarEngine,
  stopCarEngine,
  switchCarEngineToDriveMode,
  ICar,
};
