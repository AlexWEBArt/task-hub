import { Task } from "@/components/ui/task/Task";
import { TASKS } from "../data/last-tasks.data";

export function LastTasks() {
    return (
        <div>
            <h2 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-100">
                Lask Tasks
                <span className="opacity-50 font-normal">
                    ({TASKS.length})
                </span>
            </h2>
            {
                TASKS.length ? (
                    <div className="grid grid-cols-3 gap-4">
                        {
                            TASKS.map(task => (
                                <Task
                                    key={task.id}
                                    task={task}
                                />
                            ))
                        }
                    </div>
                ) : (
                    <div>
                        <p className="opasity-50">
                            No tasks available
                        </p>
                    </div>
                )
            }
        </div>
    )
}