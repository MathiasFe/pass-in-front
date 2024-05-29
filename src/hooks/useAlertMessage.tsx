import { toast } from "sonner";

export const useAlertMessage = () => {
  return {
    showAlertSuccess: (content: string) => {
      toast.success(content);
    },
    showAlertError: (content: string) => {
      toast.error(content);
    },
    showAlertInfo: (content: string) => {
      toast.info(content);
    },
    showAlertWarning: (content: string) => {
      toast.warning(content);
    },
    showAlertMessage: (title: string, content: string) => {
      toast.message(title, {
        description: content,
      });
    },
  };
};
