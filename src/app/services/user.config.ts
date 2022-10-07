export class UserConfig {
  private static path = 'http://localhost:8000';
  public static getPath(): string {
    return UserConfig.path;
  }
}