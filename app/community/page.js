import Link from "next/link";
import styles from "./community.module.css";

export default function Community() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Community</h1>

      <section className={styles.featuredMembers}>
        <h2>Featured Members</h2>
        <div className={styles.membersGrid}>
          <div className={styles.memberCard}>
            <img src="#" alt="Member 1" />
            <h3>Chinedu Obi</h3>
            <p>Expert Chef & Food Enthusiast</p>
          </div>
          <div className={styles.memberCard}>
            <img src="#" alt="Member 2" />
            <h3>Aisha Bello</h3>
            <p>Pastry Specialist</p>
          </div>
          <div className={styles.memberCard}>
            <img src="#" alt="Member 3" />
            <h3>Tunde Adebayo</h3>
            <p>Vegetarian Cuisine Guru</p>
          </div>
        </div>
      </section>

      <section className={styles.recentDiscussions}>
        <h2>Recent Discussions</h2>
        <ul className={styles.discussionList}>
          <li className={styles.discussionItem}>
            <Link href="/community/discussions/best-pasta-recipes">
              Best Pasta Recipes
            </Link>
            <p>
              Join the conversation about the best pasta recipes from around the
              world.
            </p>
          </li>
          <li className={styles.discussionItem}>
            <Link href="/community/discussions/vegan-meal-planning">
              Vegan Meal Planning
            </Link>
            <p>Share tips and tricks on planning delicious vegan meals.</p>
          </li>
          <li className={styles.discussionItem}>
            <Link href="/community/discussions/baking-with-kids">
              Baking with Kids
            </Link>
            <p>Discuss fun and safe ways to bake with your children.</p>
          </li>
        </ul>
      </section>

      <section className={styles.popularTopics}>
        <h2>Popular Topics</h2>
        <div className={styles.topicsGrid}>
          <div className={styles.topicCard}>
            <h3>Healthy Eating</h3>
            <p>Explore tips and recipes for a healthier lifestyle.</p>
          </div>
          <div className={styles.topicCard}>
            <h3>International Cuisines</h3>
            <p>Discover the best international dishes and cooking methods.</p>
          </div>
          <div className={styles.topicCard}>
            <h3>Quick & Easy Recipes</h3>
            <p>Find time-saving recipes that don’t compromise on taste.</p>
          </div>
        </div>
      </section>

      <section className={styles.upcomingEvents}>
        <h2>Upcoming Events</h2>
        <ul className={styles.eventsList}>
          <li className={styles.eventItem}>
            <h3>Virtual Cooking Class</h3>
            <p>
              Learn to cook Italian dishes with a professional chef. Date: Aug
              20, 2024
            </p>
          </li>
          <li className={styles.eventItem}>
            <h3>Community Potluck</h3>
            <p>
              Join our community potluck and share your favorite dish. Date: Sep
              15, 2024
            </p>
          </li>
          <li className={styles.eventItem}>
            <h3>Food Photography Workshop</h3>
            <p>Enhance your food photography skills. Date: Oct 10, 2024</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
