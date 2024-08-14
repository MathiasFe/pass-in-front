import { TEventsItem } from "../../Types/itemMockup";

export type ICadastroBase = {
  handlerClose: () => void;
  item: TEventsItem | null;
};

export type IRegisterBase = {
  name: string;
  mail: string;
  confirmMail: string;
};
