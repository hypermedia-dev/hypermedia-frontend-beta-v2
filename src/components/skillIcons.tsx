import Image from 'next/image';
import angular from '../assets/icons/angular.svg';
import atom from '../assets/icons/atom.svg';
import bitbucket from '../assets/icons/bitbucket.svg';
import csharp from '../assets/icons/csharp.svg';
import cplus from '../assets/icons/c++.svg';
import codepen from '../assets/icons/codepen.svg';
import css3 from '../assets/icons/css_3.svg';
import docker from '../assets/icons/docker.svg';
import drupal from '../assets/icons/drupal.svg';
import figma from '../assets/icons/figma.svg';
import framer from '../assets/icons/framer.svg';
import git from '../assets/icons/git.svg';
import go from '../assets/icons/go.svg';
import html5 from '../assets/icons/html_5.svg';
import java from '../assets/icons/java.svg';
import joomla from '../assets/icons/joomla.svg';
import jquery from '../assets/icons/jquery.svg';
import js from '../assets/icons/js.svg';
import node from '../assets/icons/node_js.svg';
import php from '../assets/icons/php.svg';
import python from '../assets/icons/python.svg';
import rlang from '../assets/icons/r_lang.svg';
import react from '../assets/icons/react.svg';
import ruby from '../assets/icons/ruby.svg';
import sublime from '../assets/icons/sublime_text.svg';
import swift from '../assets/icons/swift.svg';
import vscode from '../assets/icons/vs_code.svg';
import vue from '../assets/icons/vue.svg';
import wordpress from '../assets/icons/wordpress.svg';
import xd from '../assets/icons/xd.svg';

const icons = [
    angular, atom,
    bitbucket,csharp,cplus,
    codepen,css3,docker,drupal,
    figma,framer,git,go,html5,
    java,joomla,jquery,js,
    node,php,python,rlang,
    react,ruby,sublime,swift,
    vscode,vue,wordpress,xd
  ];
  
  
  const SkillsIcons = () => {
    return (
      <div className="flex flex-col gap-8">
        {/* Row 1: First 13 icons */}
        <div className="flex justify-center">
          {icons.slice(0, 13).map((icon, index) => (
            <div
              key={index}
              className="text-gray-600 text-4xl transition-transform transform hover:scale-125 hover:text-blue-500 mx-2"
            >
              <Image src={icon.src} width={25} height={25} priority alt={icon}/>
            </div>
          ))}
        </div>
  
        {/* Row 2: Next 10 icons */}
        <div className="flex justify-center">
          {icons.slice(13, 23).map((icon, index) => (
            <div
              key={index}
              className="text-gray-600 text-4xl transition-transform transform hover:scale-125 hover:text-blue-500 mx-2"
            >
              <Image src={icon.src} width={25} height={25} priority alt={icon}/>
            </div>
          ))}
        </div>
  
        {/* Row 3: Remaining icons */}
        <div className="flex justify-center">
          {icons.slice(23).map((icon, index) => (
            <div
              key={index}
              className="text-gray-600 text-4xl transition-transform transform hover:scale-125 hover:text-blue-500 mx-2"
            >
              <Image src={icon.src} width={25} height={25} priority alt={icon}/>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default SkillsIcons;
