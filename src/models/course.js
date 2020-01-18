export default class Course {
  constructor(
    id,
    title,
    description,
    banner,
    isSelected,
    subskills
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.banner = banner;
    this.isSelected = isSelected;
    this.subskills = subskills;
  }
}