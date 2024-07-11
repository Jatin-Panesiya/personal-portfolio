import { Button, Modal } from "@mantine/core";
import { useState } from "react";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { IoIosCall, IoIosDocument, IoIosPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Header = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="flex justify-between py-5 items-center container">
      <img src="/logo.webp" alt="" className="w-16 h-16" />
      <Button
        onClick={() => setIsContactModalOpen(true)}
        className="bg-btnBg text-black hover:bg-btnBg/90 text-base font-semibold"
      >
        Contact Me <IoIosPerson className="text-xl ms-2" />
      </Button>

      <Modal
        withCloseButton={false}
        opened={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Authentication"
        classNames={{ header: "hidden", body: "p-5" }}
        centered
      >
        <div className="grid grid-cols-2 text-lg gap-3">
          <a href="https://www.linkedin.com/in/jatin-panesiya/" target="_blank">
            <div className="flex gap-2 items-center hover:text-blue-500 text-black">
              <FaLinkedin />
              <p>LinkedIn</p>
            </div>
          </a>
          <a href="mailto:jatinpanesiya2003@gmail.com" target="_blank">
            <div className="flex gap-2 items-center hover:text-blue-500 text-black">
              <MdEmail />
              <p>Email</p>
            </div>
          </a>
          <a href="https://github.com/Jatin-Panesiya" target="_blank">
            <div className="flex gap-2 items-center hover:text-blue-500 text-black">
              <FaSquareGithub />
              <p>Github</p>
            </div>
          </a>
          <a href="tel:6353450400">
            <div className="flex gap-2 items-center hover:text-blue-500 text-black">
              <IoIosCall />
              <p>Phone</p>
            </div>
          </a>

          <a href="/Resume.pdf" target="_blank" className="col-span-2">
            <div className="flex gap-2 items-center hover:text-blue-500 text-black">
              <IoIosDocument />
              Download CV
            </div>
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
