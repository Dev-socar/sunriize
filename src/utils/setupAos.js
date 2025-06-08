import AOS from "aos";
import "aos/dist/aos.css";

export const setupAos = () => {
    AOS.init(
        {
            once: true,   
      }
  );
};
