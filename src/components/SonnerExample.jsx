import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export default function SonnerExample() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-xl font-bold">Sonner Toast Examples</h2>
      
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
            })
          }
        >
          Show Toast
        </Button>

        <Button
          variant="outline"
          onClick={() => toast.success("Success message")}
        >
          Success
        </Button>

        <Button
          variant="outline"
          onClick={() => toast.error("Error message")}
        >
          Error
        </Button>

        <Button
          variant="outline"
          onClick={() => toast.warning("Warning message")}
        >
          Warning
        </Button>

        <Button
          variant="outline"
          onClick={() => toast.info("Info message")}
        >
          Info
        </Button>

        <Button
          variant="outline"
          onClick={() => toast.loading("Loading...")}
        >
          Loading
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          With Action
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            toast.promise(
              new Promise((resolve) => setTimeout(resolve, 2000)),
              {
                loading: "Loading...",
                success: "Data loaded successfully",
                error: "Error loading data",
              }
            )
          }
        >
          Promise
        </Button>
      </div>
    </div>
  )
}
