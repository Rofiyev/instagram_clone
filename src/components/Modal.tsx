import { FormEvent, useState } from "react";
import { Box, Button, FileInput, Flex, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Group, Text, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import style from "../styles/profile.module.css";
import { useRouter } from "next/router";

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const [images, setImages] = useState([]);
  const navigete = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleImageClick = () => {
    open();
  };

  const handleModalClose = () => {
    close();
  };

  const handleImageUpload = (files: any) => {
    if (files) {
      // @ts-expect-error
      setImages([files]);
    } else {
      // Dosya seçilmediğinde bir hata mesajı gösterme işlemini burada yapabilirsiniz.
      // Örnek olarak React-Toastify kullanarak:
      // toast.error("Dosya seçilmedi");
    }
  };

  const btnStyle2 = {
    color: "white",
    fontFamily: "Gilroy-Medium",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    borderRadius: "18px",
    border: "3px solid rgba(17, 17, 17, 0.04)",
    margin: "50px 100px 50px 100px",
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={handleModalClose}
        centered
        withCloseButton={false}
        padding="xm"
      >
        <Dropzone
          onDrop={(files) => console.log("accepted files", files)}
          onReject={(files) => console.log("rejected files", files)}
          maxSize={3 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
        >
          <Group
            justify="center"
            gap="xl"
            mih={220}
            style={{ pointerEvents: "none" }}
          >
            <Dropzone.Accept>
              <IconUpload
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-blue-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-red-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-dimmed)",
                }}
                stroke={1.5}
              />
            </Dropzone.Idle>

            <div style={{ display: "block" }}>
              <Button>Fayl yuklash</Button>
            </div>
          </Group>
        </Dropzone>
      </Modal>

      <Group className={style.fillup}>
        <Box onClick={handleImageClick}>
          <Button>Select from computer</Button>
        </Box>
      </Group>
    </>
  );
}

export default Demo;
