import { useState } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { QuizQuestion } from "@/content/curriculum";

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [picks, setPicks] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const correct = questions.filter((q, i) => picks[i] === q.answer).length;

  return (
    <div className="space-y-6">
      {questions.map((q, i) => (
        <div key={i} className="rounded-lg border border-border p-4">
          <p className="mb-3 font-medium">
            {i + 1}. {q.q}
          </p>
          <div className="space-y-2">
            {q.options.map((opt, j) => {
              const picked = picks[i] === j;
              const isRight = submitted && j === q.answer;
              const isWrong = submitted && picked && j !== q.answer;
              return (
                <button
                  key={j}
                  onClick={() => !submitted && setPicks({ ...picks, [i]: j })}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-md border border-border px-3 py-2 text-left text-sm transition",
                    picked && !submitted && "border-primary bg-primary/5",
                    isRight && "border-emerald-500 bg-emerald-500/10",
                    isWrong && "border-red-500 bg-red-500/10",
                  )}
                >
                  {isRight && <Check className="h-4 w-4 text-emerald-600" />}
                  {isWrong && <X className="h-4 w-4 text-red-600" />}
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>
          {submitted && (
            <p className="mt-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">คำอธิบาย:</span> {q.explanation}
            </p>
          )}
        </div>
      ))}
      <div className="flex items-center gap-3">
        {!submitted ? (
          <Button
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(picks).length !== questions.length}
          >
            ตรวจคำตอบ
          </Button>
        ) : (
          <>
            <div className="text-sm">
              คุณได้ <span className="font-semibold text-primary">{correct}</span> /{" "}
              {questions.length} คะแนน
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setPicks({});
                setSubmitted(false);
              }}
            >
              ทำใหม่
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
