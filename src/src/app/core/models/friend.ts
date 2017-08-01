export class Friend {
  public friendId: number;
  public name: string;
  public address: string;
  public phone: string;
  public bio: string;
  public currentStatus: string;
  public photo: string;

  constructor() {
    this.friendId = 0;
    this.name = null;
    this.address = null;
    this.phone = null;
    this.bio = null
  }
}