import { ExecTask, TaskOfTasks } from "@flybywiresim/igniter";

export default new TaskOfTasks("all", [
    // A339X Livery Package Task
    new TaskOfTasks("hues-livery", [
        new TaskOfTasks("preparation", [
            new ExecTask("copy-base-files (8K)", "npm run build:copy-base-package-8k"),
            new ExecTask("copy-base-files (4K)", "npm run build:copy-base-package-4k")
        ], true),
        new TaskOfTasks("dist", [
            new ExecTask("manifests", "npm run build:manifest")
        ])
    ])
]);
