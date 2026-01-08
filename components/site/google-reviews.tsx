import Link from "next/link"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getGoogleReviewsData } from "@/lib/gbp"

const MAX_REVIEWS = 6
const MAX_COMMENT_LENGTH = 240

function formatDate(value: string) {
  if (!value) return ""
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ""
  return new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric" }).format(date)
}

function truncateComment(comment: string) {
  if (comment.length <= MAX_COMMENT_LENGTH) return comment
  return `${comment.slice(0, MAX_COMMENT_LENGTH).trimEnd()}…`
}

function renderStars(rating: number, label: string) {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={label}>
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index < rating
        return (
          <Star
            key={`${label}-${index}`}
            className={filled ? "h-4 w-4 fill-yellow-400 text-yellow-400" : "h-4 w-4 text-white/30"}
          />
        )
      })}
    </div>
  )
}

export default async function GoogleReviewsSection() {
  const reviewsUrl = process.env.GBP_REVIEWS_URL
  const data = await getGoogleReviewsData()

  if (!data && !reviewsUrl) {
    return null
  }

  const reviews = data?.reviews ?? []
  const summary = data?.summary
  const displayReviews = reviews.slice(0, MAX_REVIEWS)

  return (
    <section id="google-reviews" className="scroll-mt-24 bg-gray-950 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-3">
          <Badge className="w-fit bg-white/10 text-white">Proof</Badge>
          <h2 className="text-3xl font-black sm:text-4xl">Google Reviews</h2>
          {summary?.averageRating ? (
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-200">
              {renderStars(Math.round(summary.averageRating), `${summary.averageRating} out of 5 stars`)}
              <span className="font-semibold">{summary.averageRating.toFixed(1)} / 5</span>
              {summary.totalReviewCount ? (
                <span className="text-gray-300">Based on {summary.totalReviewCount} reviews</span>
              ) : null}
            </div>
          ) : (
            <p className="text-sm text-gray-300">Recent feedback from commercial clients and site managers.</p>
          )}
        </div>

        {displayReviews.length ? (
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {displayReviews.map((review) => {
              const dateLabel = formatDate(review.createTime)
              const ratingLabel = `${review.rating} out of 5 stars`
              return (
                <Card key={review.id} className="border border-white/10 bg-white/5">
                  <CardContent className="space-y-4 p-6">
                    {renderStars(review.rating, ratingLabel)}
                    <p className="text-sm text-gray-200">
                      {review.comment ? `“${truncateComment(review.comment)}”` : "“Shared a rating without a comment.”"}
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-white">{review.authorName}</p>
                      {dateLabel ? <p className="text-xs text-gray-400">{dateLabel}</p> : null}
                    </div>
                    {reviewsUrl ? (
                      <Link
                        href={reviewsUrl}
                        className="text-sm font-semibold text-red-300 hover:text-red-200"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read more on Google
                      </Link>
                    ) : null}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        ) : reviewsUrl ? (
          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-gray-200">
            <p>See what our commercial clients are saying on Google.</p>
            <Button asChild variant="outlineOnDark" className="w-fit">
              <Link href={reviewsUrl} target="_blank" rel="noreferrer">
                Read our reviews on Google
              </Link>
            </Button>
          </div>
        ) : null}

        {displayReviews.length && reviewsUrl ? (
          <div className="mt-8">
            <Button asChild variant="outlineOnDark">
              <Link href={reviewsUrl} target="_blank" rel="noreferrer">
                View all reviews on Google
              </Link>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
