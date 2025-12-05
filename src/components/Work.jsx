import { workData } from "../assets/assets";
import { motion } from "motion/react";
import FontIcon from "./FontIcon";
import LazyImage from "./LazyImage";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="relative -z-1 w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo!"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo!"
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo!"
      >
        我是一名具备多个ToB/ToC项目开发经验的前端工程师。曾主导开发过多个ToB中台项目，可视化大屏项目。具备多个ToC（小程序、H5、Hybird）项目开发经验。涉及场景涵盖政府数字化系统、在线教育、电商、智能家居App等多个领域。
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
      >
        {workData.map(({ title, description, bgImage }, index) => (
          <motion.div
            whileHover={{scale: 1.05}}
            transition={{duration: 0.5}}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg overflow-hidden relative cursor-pointer group"
          >
            <LazyImage src={bgImage} alt={title} className="w-full h-full" />
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold text-sm">{title}</h2>
                <p className="text-sm text-gray-700">{description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <FontIcon icon="send-fill" className="text-xl" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-light-hover duration-500 dark:text-white dark:border-white dark:hover:bg-dark-hover "
      >
        Show more
        <FontIcon icon="arrow-right" className="dark:text-white text-md" />
      </motion.a>
    </motion.div>
  );
};

export default Work;
