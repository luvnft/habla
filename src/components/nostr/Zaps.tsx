import { useMemo } from "react";

import { Flex, Text, Stack } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

import { formatShortNumber } from "@habla/format";
import { getZapRequest, getZapAmount } from "@habla/nip57";
import User from "@habla/components/nostr/User";

export default function Zaps({ event, zaps }) {
  const zappers = useMemo(() => {
    return zaps
      .map((z) => {
        return { ...getZapRequest(z), amount: getZapAmount(z) };
      })
      .filter((z) => z.pubkey !== event.pubkey);
  }, [zaps]);
  return (
    <Stack spacing="3">
      {zappers.map((z) => {
        return (
          <>
            <Flex alignItems="center" gap="1">
              <User pubkey={z.pubkey} />
              <Text as="span" fontSize="lg" fontWeight={500}>
                {formatShortNumber(z.amount)}
              </Text>
            </Flex>
            {z.content.length > 0 && (
              <Prose>
                <Text as="blockquote">{z.content}</Text>
              </Prose>
            )}
          </>
        );
      })}
    </Stack>
  );
}