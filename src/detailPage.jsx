import { Link } from "react-router-dom";

function DetailPage() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
      <Link
        to="/"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4 mt-10"
      >
        Back
      </Link>
      <h1 className="text-4xl font-bold mb-4 md:mb-8 text-center">
        Detail BMI
      </h1>
      <img
        src="/foto.webp"
        alt="Hidup Sehat"
        className="w-full rounded-lg mb-8 md:mb-12"
      />
      <div className="prose prose-lg md:prose-xl">
        <p>
          Handling Overweight and Underweight Problems Maintaining a healthy
          weight is essential for overall well-being, and addressing both
          overweight and underweight issues requires a balanced approach.
          Overweight individuals often struggle with excess body fat, which can
          lead to health complications such as heart disease, diabetes, and
          joint problems. On the other hand, underweight individuals may face
          challenges like weakened immunity, nutrient deficiencies, and low
          energy levels. Understanding the causes and solutions for both
          conditions is key to achieving a healthy body weight. For those
          dealing with overweight issues, a combination of dietary adjustments
          and physical activity is crucial. Eating a balanced diet rich in whole
          foods, such as fruits, vegetables, lean proteins, and whole grains,
          can help regulate calorie intake. Reducing processed foods, sugary
          drinks, and excessive fats can prevent unnecessary weight gain.
          Additionally, engaging in regular exercise, such as walking, jogging,
          or strength training, helps burn calories and improve metabolism.
          Underweight individuals need to focus on nutrient-dense foods and
          strength-building exercises to gain healthy weight. Consuming
          calorie-rich but nutritious foods, such as nuts, dairy products, lean
          meats, and starchy vegetables, can help increase body mass. Instead of
          relying on junk food for weight gain, it is important to prioritize
          proteins, healthy fats, and complex carbohydrates. Strength training
          exercises can also help build muscle mass rather than just adding fat.
          Beyond diet and exercise, mental and emotional well-being plays a
          significant role in weight management. Stress, anxiety, and eating
          disorders can contribute to both overweight and underweight problems.
          Seeking professional guidance from nutritionists, therapists, or
          doctors can provide personalized strategies for maintaining a healthy
          weight. Developing a positive relationship with food and body image is
          essential for long-term success. Ultimately, handling weight issues
          requires consistency and patience. Whether aiming to lose or gain
          weight, setting realistic goals and making gradual lifestyle changes
          is more effective than extreme dieting or unhealthy habits. Listening
          to the body's needs, staying hydrated, and getting enough sleep are
          additional factors that support a balanced weight. By adopting a
          holistic approach, individuals can achieve and maintain a healthy
          weight while improving their overall quality of life.
        </p>
      </div>
    </div>
  );
}

export default DetailPage;

