import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Layout, 
  Mail, 
  Phone,
  Linkedin, 
  Twitter,
  Cpu,
  Globe,
  Database,
  BrainCircuit,
  Users,
  LineChart
} from 'lucide-react';
import { WorkExperience, EducationItem, SkillMetric, ProjectItem } from './types';

export const RESUME_DATA = {
  name: "曹婷",
  title: "资深 HRBP & AI 应用探索者",
  avatar: "https://picsum.photos/400/400?grayscale",
  tagline: "将 AI 技术融入人力资源管理，用数据驱动组织效能提升。",
  about: "拥有3年工作经验的互联网HRBP，成长于网易HR体系。熟练掌握组织发展(OD)、薪酬绩效、人才发展(TD)等各模块工作。擅长人力资源数据分析与效能分析，并持有AI Prompt Engineer及AI Agent认证，致力于通过AI技术优化人力资源解决方案。",
  
  socials: [
    { name: "Phone", icon: <Phone size={20} />, url: "tel:18005668946" },
    { name: "Email", icon: <Mail size={20} />, url: "mailto:915171034@qq.com" },
  ],

  experience: [
    {
      id: "1",
      role: "HRBP (人力资源业务合作伙伴)",
      company: "浙江翼信科技有限公司",
      period: "2022.08 - 至今",
      description: [
        "参与公司战略共创，通过OKR工具拆解目标，推动组织定期复盘与进化迭代。",
        "主导人才发展计划，包括职业路径规划、能力提升及继任者培养，组织年度晋升。",
        "制定薪酬管理制度及员工手册，负责整体薪酬核算、调薪及五险一金管理。",
        "定期进行人才盘点与结构评估，优化管理干部配置，选拔关键岗位人才。",
        "深入业务一线，提供定制化HR解决方案，推动企业文化建设与员工关怀。"
      ],
      techStack: ["OKR管理", "薪酬设计", "人才盘点", "文化建设"]
    },
    {
      id: "2",
      role: "人力资源专员/助理",
      company: "浙江顺路物流有限公司",
      period: "2022.04 - 2022.08",
      description: [
        "协助优化员工等级评定方案，完善职级体系。",
        "搭建流失管控制度体系，实时跟踪各场地人员流失情况并制定对策。",
        "规范员工季度晋升考核数据的收集模板，提升数据准确性。"
      ],
      techStack: ["流失率分析", "职级体系", "数据规范"]
    },
    {
      id: "3",
      role: "招聘运营 (实习)",
      company: "网易（杭州）网络有限公司",
      period: "2021.03 - 2021.11",
      description: [
        "负责社会招聘运营，日均筛选简历100+，安排面试5+，月均Offer 25份。",
        "撰写招聘数据分析报告，优化招聘渠道投放策略。",
        "负责面试官运营及内推渠道运营，岗位需求满足度达到100%。"
      ],
      techStack: ["高通量招聘", "数据运营", "渠道管理"]
    }
  ] as WorkExperience[],

  education: [
    {
      id: "1",
      degree: "应用经济学 硕士",
      school: "南京信息工程大学",
      year: "2019 - 2022",
      details: "担任班级学习委员，参与多项学术会议并发表2篇论文。组织学校能源与气候会议。"
    },
    {
      id: "2",
      degree: "经济学 本科",
      school: "淮北师范大学",
      year: "2014 - 2018",
      details: "获三好学生、奖学金，担任大学生科技创新协会副部长。"
    }
  ] as EducationItem[],

  skills: [
    { subject: '组织发展 (OD)', A: 90, fullMark: 100 },
    { subject: '薪酬绩效 (C&B)', A: 85, fullMark: 100 },
    { subject: '人才发展 (TD)', A: 85, fullMark: 100 },
    { subject: 'HR数据分析', A: 95, fullMark: 100 },
    { subject: 'AI Agent/Prompt', A: 80, fullMark: 100 },
    { subject: '招聘配置', A: 90, fullMark: 100 },
  ] as SkillMetric[],

  projects: [
    {
      id: "1",
      title: "OKR 战略落地实施",
      description: "引领跨部门协作，促成四大业务线确立并认同OKR目标。通过持续监控与复盘，显著提升组织协同效率，有效推动绩效达成。",
      tags: ["战略管理", "OKR", "组织效能"],
      image: "https://picsum.photos/600/400?random=10",
      link: "#"
    },
    {
      id: "2",
      title: "研发激励机制创新",
      description: "构建并实施研发积分制度，实现工作量与效率的量化管理。显著提高研发团队主动性，有效推动平均工时增长，优化资源配置。",
      tags: ["激励体系", "量化管理", "研发效能"],
      image: "https://picsum.photos/600/400?random=11",
      link: "#"
    },
    {
      id: "3",
      title: "流失率管控制系",
      description: "针对物流行业高流失率痛点，搭建流失管控与预警体系，通过数据追踪各场地流失进展，提出针对性改进措施。",
      tags: ["数据分析", "员工关系", "风险管控"],
      image: "https://picsum.photos/600/400?random=12",
      link: "#"
    }
  ] as ProjectItem[]
};

export const NAV_LINKS = [
  { name: '关于我', href: '#hero', icon: <Cpu size={16} /> },
  { name: '工作经历', href: '#experience', icon: <Briefcase size={16} /> },
  { name: '核心技能', href: '#skills', icon: <BrainCircuit size={16} /> },
  { name: '重点项目', href: '#projects', icon: <Layout size={16} /> },
  { name: '教育背景', href: '#education', icon: <GraduationCap size={16} /> },
  { name: '联系方式', href: '#contact', icon: <Mail size={16} /> },
];