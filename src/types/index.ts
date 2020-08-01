export * from './resume.types';

interface ICategory {
  /** the label or title used for the Card */
  label: string;
  /** the key associated with this category.  use the enum! */
  key: string;
  /** the keyboard code associated with this category. */
  keyCode: string;
}

export { ICategory };
