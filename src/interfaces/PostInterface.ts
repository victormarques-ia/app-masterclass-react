import UserInterface from "./UserInterface";

export default interface PostInterface {
  id: number;
  attributes: {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    id: number;
    attributes: Partial<UserInterface>;
  };
}
