import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    fontFamily: "Inter",
    bg: "#F3F3F3",
    _dark: {
      bg: "orange.500",
    },
    borderRadius: "46px",
    py: "8px",
    px: "16px",
  },
});

export default defineMultiStyleConfig({ baseStyle });