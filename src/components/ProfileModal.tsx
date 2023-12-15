import { ChangeEvent, useState } from "react";
import { Box, Flex, Group, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";

function ProfileDemo({ file, setFile }: { file: string; setFile: Function }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [images, setImages] = useState(file);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target && target.files) {
      setImages(URL.createObjectURL(target.files?.[0]));
      setFile(target.files?.[0]);
      close();
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => close()}
        centered
        withCloseButton={false}
        padding="xm"
      >
        <Flex style={{ width: "100%" }}>
          <label
            htmlFor="image"
            style={{
              padding: "20px",
              border: "1px dashed #fff",
              width: "100%",
              textAlign: "center",
            }}
          >
            Upload
          </label>
          <input
            type="file"
            id="image"
            style={{ display: "none" }}
            accept=".jpg, .jpeg, .png"
            onChange={handleImageUpload}
          />
        </Flex>
      </Modal>

      <Group>
        <Box onClick={() => open()}>
          <Image
            src={images}
            width={500}
            height={500}
            alt="Picture of the author"
            style={{ borderRadius: "4px", objectFit: "cover" }}
          />
        </Box>
      </Group>
    </>
  );
}

export default ProfileDemo;
