import { Tcontainer } from "./types";
import { CustomContainer } from "./style";

export const ContainerComponent = ({
  children,
  fullHeight,
  fullwidth,
  backgroundColor,
  sx = {},
}: Tcontainer) => {
  return (
    <CustomContainer
      fullHeight
      fullwidth
      backgroundColor={backgroundColor}
      container
      sx={sx}
    >
      {children}
    </CustomContainer>
  );
};
