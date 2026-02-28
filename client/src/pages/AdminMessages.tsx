import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";

export default function AdminMessages() {
  const { data: messages, isLoading } = useQuery({
    queryKey: [api.contact.list.path],
  });

  if (isLoading) {
    return (
      <div className="p-8 space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Contact Messages</h1>
      <div className="space-y-4">
        {messages?.length === 0 ? (
          <p className="text-muted-foreground text-center py-12">No messages yet.</p>
        ) : (
          messages?.map((msg) => (
            <Card key={msg.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {msg.name} ({msg.email})
                </CardTitle>
                <span className="text-xs text-muted-foreground">
                  {msg.createdAt ? format(new Date(msg.createdAt), "PPP p") : ""}
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-sm whitespace-pre-wrap">{msg.message}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
