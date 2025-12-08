import { projectsExpData } from "../assets/assets";
import { motion } from "motion/react";
import FontIcon from "@/components/FontIcon";
import LazyImage from "./LazyImage";

const findNode = (node) => {
  if(node.id && node.id.startsWith("item_")) {
    return node.children[0]
  } else {
    return findParentNode(node);
  }
}
const findParentNode = (node) => {
  if (node == null) return;
  if (node.dataset && "tag" in node.dataset && node.dataset.tag === "item") {
    return node;
  }
  return findParentNode(node.parentNode);
};
const Services = () => {
  const showProjectDialog = (e) => {
    e.preventDefault();
    const target = findNode(e.target);
    if (target == null) return;

    const root = target.parentNode;
    const content = target.getElementsByClassName('content')[0]
    const showMoreBtn = target.getElementsByTagName('button')[0];
    const is_dialog = target.className.includes("fixed");

    const animateClassStr =
      "fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[74%] h-[68%] md:w-[60%] md:h-[60%] z-100 bg-white dark:bg-dark-hover";
    const originClassStr =
      "hover:shadow-black hover:bg-light-hover hover:-translate-y-1 dark:hover:bg-dark-hover dark:hover:shadow-white";
    const rootDialogClassStr =
      "fixed top-0 left-0 w-full h-full bg-black/80 overflow-hidden z-60";
    if (is_dialog) {
      // 恢复页面滚动
      document.body.style.overflow = "auto";
      target.className = target.className.replace(animateClassStr, "");
      target.className += " " + originClassStr;
      root.className = "";
      content.className += " hidden";
      showMoreBtn.className = showMoreBtn.className.replace('hidden', '');
    } else {
      // 禁止页面滚动
      document.body.style.overflow = "hidden";
      root.className +=  rootDialogClassStr;
      target.className += " " + animateClassStr;
      target.className = target.className.replace(originClassStr, "");
      content.className = content.className.replace("hidden", '');
      showMoreBtn.className += " hidden";
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo!"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo!"
      >
        Project Experience
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo!"
      >
        我是一名具有多年开发经验的前端工程师，能够有效的解决项目中遇到的疑难杂症。具备多个ToB/ToC项目开发经验，涵盖PC/H5端，移动端，小程序等；具备良好的工程化，性能优化等能力。
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {projectsExpData.map(({ icon, title, description, content }, index) => (
          <div key={title} onClick={showProjectDialog} id={`item_${index}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              data-tag="item"
              className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer duration-500 hover:shadow-black hover:bg-light-hover hover:-translate-y-1 dark:hover:bg-dark-hover dark:hover:shadow-white"
            >
              <LazyImage src={icon} alt="" className="w-12 h-12" />
              <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                {description}
              </p>
              <div className="content hidden overflow-y-auto max-h-[60%] mt-5 leading-6.5">
                {content.map((con, index) => (
                  <li key={con} className="mb-2">
                    <span>{`${index + 1}. `}</span>
                    <div className="inline" dangerouslySetInnerHTML={{__html: con}}></div>
                  </li>
                ))}
              </div>
              <button
                className="flex items-center gap-2 text-sm mt-5 cursor-pointer"
              >
                Read more
                <FontIcon
                  icon="arrow-right"
                  className="text-md dark:text-white"
                />
              </button>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
