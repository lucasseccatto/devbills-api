type CategoryProps = {
  _id?: string;
  title: string;
  color: string;
};

export class Category {
  public _id?: string;
  public title: string;
  public color: string;

  constructor(data: CategoryProps) {
    this._id = data._id;
    this.title = data.title;
    this.color = data.color.toUpperCase();
  }
}
