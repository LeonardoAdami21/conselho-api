export interface EmailRepositoryInterface {
  create(email: string): Promise<void>;
  findEmail(email: string): Promise<void>;
}
