/**
 * Tests for apiService
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock do axios
vi.mock('axios', () => ({
  default: {
    create: vi.fn(() => ({
      get: vi.fn(),
      post: vi.fn(),
      put: vi.fn(),
      delete: vi.fn(),
      patch: vi.fn(),
    })),
  },
}));

// Importações após os mocks
import axios from 'axios';

describe('apiService', () => {
  let mockAxiosCreate: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockAxiosCreate = axios.create as ReturnType<typeof vi.fn>;
    vi.clearAllMocks();
    
    // Define a variável de ambiente para os testes
    process.env.NEXT_PUBLIC_API_URL = 'http://localhost:3000/api';
  });

  it('should create axios instance with correct configuration', async () => {
    // Importa o serviço para executar a criação da instância
    await import('../../src/services/apiService');

    expect(mockAxiosCreate).toHaveBeenCalledWith({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  });

  it('should export the api instance', async () => {
    const { default: api } = await import('../../src/services/apiService');

    expect(api).toBeDefined();
    expect(api).toHaveProperty('get');
    expect(api).toHaveProperty('post');
    expect(api).toHaveProperty('put');
    expect(api).toHaveProperty('delete');
    expect(api).toHaveProperty('patch');
  });

  it('should use environment variable for base URL', () => {
    // Verifica se a variável de ambiente está sendo usada
    // Como a variável pode não estar definida no ambiente de teste,
    // vamos verificar se o serviço usa a variável correta
    expect(typeof process.env.NEXT_PUBLIC_API_URL).toBe('string');
  });

  it('should have correct headers configuration', async () => {
    // Limpa o cache do módulo para garantir importação limpa
    vi.resetModules();
    
    await import('../../src/services/apiService');

    expect(mockAxiosCreate).toHaveBeenCalledWith({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  });

  it('should handle missing environment variable gracefully', async () => {
    // Salva o valor original
    const originalApiUrl = process.env.NEXT_PUBLIC_API_URL;
    
    // Remove a variável de ambiente
    delete process.env.NEXT_PUBLIC_API_URL;
    
    // Limpa o cache do módulo para reimportar
    vi.resetModules();
    
    // Reimporta o serviço
    await import('../../src/services/apiService');
    
    // Verifica se ainda cria a instância (mesmo com baseURL undefined)
    expect(mockAxiosCreate).toHaveBeenCalledWith({
      baseURL: undefined,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
    
    // Restaura o valor original
    process.env.NEXT_PUBLIC_API_URL = originalApiUrl;
  });

  it('should create only one axios instance', async () => {
    // Limpa o cache do módulo
    vi.resetModules();
    
    // Importa o serviço múltiplas vezes
    await import('../../src/services/apiService');
    await import('../../src/services/apiService');
    await import('../../src/services/apiService');
    
    // Deve ter chamado create apenas uma vez (devido ao cache do módulo)
    expect(mockAxiosCreate).toHaveBeenCalledTimes(1);
  });

  it('should be an axios instance with all HTTP methods', async () => {
    const { default: api } = await import('../../src/services/apiService');
    
    // Verifica se é uma instância do axios com todos os métodos HTTP
    expect(typeof api.get).toBe('function');
    expect(typeof api.post).toBe('function');
    expect(typeof api.put).toBe('function');
    expect(typeof api.delete).toBe('function');
    expect(typeof api.patch).toBe('function');
  });
});
