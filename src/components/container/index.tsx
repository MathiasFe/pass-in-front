import { Tcontainer } from "./types";
import { CustomContainer } from "./style";

export const ContainerComponent = ({
  children,
  spacing = 0,
  fullHeight = true,
  fullwidth = true,
  container = true,
  backgroundColor,
  sx = {},
}: Tcontainer) => {
  return (
    <CustomContainer
      spacing={spacing}
      fullHeight={fullHeight}
      fullwidth={fullwidth}
      backgroundColor={backgroundColor}
      container={container}
      sx={sx}
    >
      {children}
    </CustomContainer>
  );
};
