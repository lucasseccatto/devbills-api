type CategoryProps = {
  id?: string;
  title: string;
  color: string;
};

export class Category {
  public id?: string;
  public title: string;
  public color: string;

  constructor(data: CategoryProps) {
    this.id = data.id;
    this.title = data.title;
    this.color = data.color.toUpperCase();
  }
}
