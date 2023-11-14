import { FormEvent, useState } from "react";
import { Box, Button, FileInput, Flex, Group, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NextRouter, useRouter } from "next/router";
import style from "../styles/profile.module.css";

function Create() {
  const [opened, { open, close }] = useDisclosure(false);
  const [images, setImages] = useState([]);
  const navigete: NextRouter = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        onClose={() => close()}
        centered
        withCloseButton={false}
        padding="xm"
      >
        <Flex justify="space-around">
          <form onSubmit={handleSubmit}>
            <FileInput
              style={{ marginTop: "30px", fontWeight: "bold" }}
              name="image"
              label="Rasmni tanlang"
              placeholder="Rasmni tanlash uchun bosing"
              required
              onChange={handleImageUpload}
            />
            <Button style={btnStyle2} type="submit">
              Yangilash
            </Button>
          </form>
        </Flex>
      </Modal>

      <Group className={style.fillup}>
        <Box onClick={() => open()}>
          <Button>Select from computer</Button>
        </Box>
      </Group>
    </>
  );
}

export default Create;
