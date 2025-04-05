import Image from "next/image";
import Head from "next/head";

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Building a Machine Learning IPL Match Predictor with ELO</title>
        <meta name="description" content="A deep dive into building a machine learning-powered IPL match predictor using player-specific ELO ratings, form analysis, and advanced data science techniques." />
      </Head>

      <article className="prose prose-lg mx-auto my-10 px-4 text-black dark:text-white">
        {/* Post Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Beyond the Boundary: Building a Machine Learning IPL Match Predictor with Advanced ELO Rating System</h1>
          <p className="text-gray-800 dark:text-gray-300 mt-4">
            How I created a sophisticated cricket match prediction model combining custom ELO ratings, player form analysis, and machine learning to predict IPL match outcomes with remarkable accuracy.
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">Published on: April 5, 2025</p>
        </header>

        {/* Featured Image */}
        <div className="mb-10">
          <Image
            src="/ipl.jpg"
            alt="Illustration of IPL match prediction model"
            width={800}
            height={450}
            className="rounded-xl shadow-md"
            priority
          />
        </div>

        {/* Post Content */}
        <section>
          <p>
            Cricket analysis has evolved from basic stats to advanced predictive modeling. As a data scientist and cricket lover, I set out to build an IPL prediction system that goes beyond conventional approaches. This post outlines how I created an advanced predictor incorporating a custom ELO system, player performance analytics, and machine learning.
          </p>

          <h2>The Challenge of Cricket Prediction</h2>
          <p>
            Cricket's complexity, unpredictability, and human variability make accurate predictions hard. Most models focus on team stats or win/loss ratios, overlooking individual player form and impact. The IPL adds more complexity with player rotations and dynamic team compositions.
          </p>

          <h2>The Innovation: Player-Specific ELO Rating System</h2>
          <p>
            At the heart of my system is a <strong>custom ELO rating system</strong> tailored to cricket. While ELO is common in chess and other sports, applying it to cricket required innovation.
          </p>

          <h3>What Makes My Cricket ELO System Unique</h3>
          <ol>
            <li>
              <strong>Role-Based Performance Weighting:</strong>
              <p>
                Batsmen, bowlers, and all-rounders are weighted differently. The function <code>get_weighted_role_performance()</code> handles this:
              </p>
              <ul>
                <li>Batsmen: 85% batting, 5% bowling, 10% fielding</li>
                <li>Bowlers: 15% batting, 75% bowling, 10% fielding</li>
                <li>All-rounders: 45% batting, 45% bowling, 10% fielding</li>
              </ul>
            </li>
            <li>
              <strong>Comprehensive Performance Metrics:</strong>
              <ul>
                <li>Batting: Strike rate, runs, dismissal impact</li>
                <li>Bowling: Wicket-taking and economy</li>
                <li>Fielding: Catches, run-outs, stumpings</li>
              </ul>
            </li>
            <li>
              <strong>Time Decay Factor:</strong>
              <p>
                Recent matches are weighted more using:
              </p>
              <pre><code>decay_factor = 2 ** (-days_diff / half_life_days)</code></pre>
            </li>
            <li>
              <strong>Form Adjustment:</strong>
              <p>
                Recent form influences ELO updates:
              </p>
              <pre><code>adjusted_k = k_factor * (0.5 + overall_score) * (1 + time_factor * 0.5) * (1 + form_factor * 0.2)</code></pre>
            </li>
          </ol>

          <h2>From Individual Ratings to Team Prediction</h2>
          <p>
            Player ELO ratings are aggregated into team-level features:
          </p>
          <pre><code>{`data = {
  'team1_avg_elo': team1_avg_elo,
  'team2_avg_elo': team2_avg_elo,
  'team1_avg_form': team1_avg_form,
  'team2_avg_form': team2_avg_form,
  'team1_last_5_wins': team1_last_5_wins,
  'team2_last_5_wins': team2_last_5_wins,
  'team1_vs_team2_matches': team1_vs_team2_matches,
  'head_to_head_win_rate': head_to_head_win_rate,
  'team1_win_rate': team1_win_rate
}`}</code></pre>
          <p>
            These features go into an XGBoost model trained on historical IPL data.
          </p>

          <h2>Technical Implementation Highlights</h2>
          <h3>Dynamic Player Role Identification</h3>
          <pre><code>{`if batting_ratio > 0.7:
  player_roles[player] = 'batsman'
elif batting_ratio < 0.3:
  player_roles[player] = 'bowler'
else:
  player_roles[player] = 'all-rounder'`}</code></pre>

          <h3>Match Analysis Pipeline</h3>
          <ol>
            <li>Identify players in each match</li>
            <li>Compute detailed performance metrics</li>
            <li>Determine results and performances</li>
            <li>Update ELOs based on opposition quality</li>
            <li>Recalculate form and team averages</li>
          </ol>

          <h3>Performance-Based ELO Adjustments</h3>
          <pre><code>elo_adjustment = adjusted_k * (match_result - expected_score) * (1 + overall_score)</code></pre>

          <h2>Results and Validation</h2>
          <ul>
            <li><strong>Prediction Accuracy:</strong> 67.8%</li>
            <li><strong>ROC-AUC Score:</strong> 0.723</li>
            <li><strong>Player ELO vs MVP Correlation:</strong> 0.72</li>
          </ul>

          <h2>Applications Beyond Cricket</h2>
          <h3>Sports Analytics</h3>
          <p>
            Adapt the role-based ELO system to basketball, football, or esports by tweaking metrics.
          </p>

          <h3>Financial Markets</h3>
          <p>
            Use decay, performance adjustments, and form for stock or sector performance.
          </p>

          <h3>Business Resource Allocation</h3>
          <p>
            Assign teams and projects based on individual performance-weighted ratings.
          </p>

          <h3>Healthcare</h3>
          <p>
            Improve patient prediction models using weighted historical data and time decay.
          </p>

          <h2>Conclusion</h2>
          <p>
            This IPL predictor was a rewarding challenge. With player-specific insights and statistical rigor, it outperforms traditional methods.
          </p>
          <p>
            This project shows the power of combining domain knowledge with machine learning. Whether you're into sports, data science, or just cricket — there's something here for you.
          </p>

          <div className="mt-10 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <p className="text-sm italic text-gray-700 dark:text-gray-400">
              <strong>Disclaimer:</strong> This prediction model is for educational purposes only. Match outcomes may vary due to factors like injuries, weather, or on-field decisions. Do not use this model for betting.
            </p>
          </div>

          <p className="mt-6 italic">
            — Check out the full code and data on <a href="#" className="text-blue-600 underline">my GitHub</a>.
          </p>
        </section>
      </article>
    </>
  );
}
