import { StaticImageData } from "next/image";

export interface IProject {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  github: string;
  webapp: string;
}
