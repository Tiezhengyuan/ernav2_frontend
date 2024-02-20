import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import HomeView from "../views/home/HomeView";

import SampleView from "../views/sample/SampleView";
import InjectData from "../views/sample/InjectData";
import LoadSamples from "../views/sample/LoadSamples";
import ParseSamples from "../views/sample/ParseSamples";
import BrowseStudySamples from "../views/sample/BrowseStudySamples";

import ManageView from "../views/ManageView";
import ProjectCreate from "../views/project/ProjectCreate";
import ProjectUpdate from "../views/project/ProjectUpdate";
import ManageReference from "../views/ManageReference";

import RNAseqView from "../views/rnaseq/RNAseqView";

import ToolsView from "../views/tools/ToolsView";

import DebuggingView from "../views/debugging/DebuggingView";
import TableSimple from "../components/TableSimple";
import BasicInput from "../components/BasicInput";
import StoreData from "../views/debugging/StoreData";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sample",
    name: "sample",
    component:SampleView,
    children: [
      {
        path: "load_samples",
        name: "load_samples",
        component: LoadSamples,
      },
      {
        path: "browse_study_samples",
        name: "browse_study_samples",
        component: BrowseStudySamples,
      },
      {
        path: "inject_data",
        name: "inject_data",
        component: InjectData,
      },
      {
        path: "parse_samples",
        name: "parse_samples",
        component: ParseSamples,
      },
    ],
  },
  {
    path: "/manage",
    name: "manage",
    component: ManageView,
    children: [
      {
        path: "create_project",
        name: "create_project",
        component: ProjectCreate,
      },
      {
        path: "update_projects",
        name: "update_projects",
        component: ProjectUpdate,
      },

      {
        path: "build_reference",
        name: "build_reference",
        component: ManageReference,
      },
    ],
  },
  {
    path: "/rnaseq",
    name: "rnaseq",
    component: RNAseqView,
  },
  {
    path: "/tools",
    name: "tools",
    component: ToolsView,
  },
  {
    path: "/debugging",
    name: "debugging",
    component: DebuggingView,
    children: [
      {
        path: "simple_table",
        name: "simple_table",
        component: TableSimple,
      },
      {
        path: "simple_input",
        name: "simple_input",
        component: BasicInput,
      },
      {
        path: "store_data",
        name: "store_data",
        component: StoreData,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
