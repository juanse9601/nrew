export async function fetchData(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Datos cargados'), 1000);
    });
  }