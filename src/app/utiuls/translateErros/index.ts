export const translateError = (error: string) => {
  return {
    'auth/user-not-found': 'Usuário não encontrado.',
    'auth/wrong-password': 'Senha incorreta.',
    'auth/too-many-requests': 'A conta foi suspensa, por erros consecutivos. Altere a senha'
  }[error]
}