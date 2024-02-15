import './Singlepost.css'
import stochastic from '../../assets/stochastic.jpg'

export default function Singlepost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src={stochastic} alt=" " className="singlePostImg"/>
        <h1 className='singlePostTitle'>Stochastic Optimization Algorithm
        <div className='singlePostEdit'>
        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash"></i>
        </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>Author: <b>Anjali</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className="postdetails">
        Imagine you are playing a board game where you need to reach a specific goal by making moves determined by rolling a six-sided die. If you were aiming to find the most efficient path to reach your goal, you might try different strategies based on the outcomes of your dice rolls. However, due to the inherent uncertainty in the dice, you can't predict the exact result each time. Your movements would be inherently random.
Similarly, a computer would use “randomness” to find the optima of an objective function. This random search is called a Stochastic algorithm but, what is an optimization algorithm? Before we try to decode it, let’s focus on the word: optimization.<br/><br/>
According to the Handbook of Research on Nature Inspired Computing for Economics and Management, Hershey, IGR, 2006, optimizing is the process of finding the solution ω∗ which minimizes (maximizes) f.
Now that we have the definition of each term, let’s summarize it into a simple sentence:<br/><br/>
Stochastic optimization algorithm refers to the field of optimization algorithms that explicitly use randomness to find the optima of an objective function or optimizes its randomness.
Its use is primarily extensive in machine learning, specifically for classification and regressive predictive modeling problems. The method used is complex and non-linear. Stochastic global search optimization algorithm approximates global optimum for a function. Another term for the same would be Simulated annealing. Its applications are circuit partitioning, hardware/software, graph partitioning, and image processing.Further real-life applications are in industrial, biological, engineering, and electrical fields. Its principles are also applicable in evolutionary computing and genetic algorithms.
The algorithm is in use in two different situations: while comparing algorithms and evaluating the final result.<br/>
<br/>
Let's break it down. When comparing heuristic algorithms, we use a method called stochastic optimization. Heuristic means a quick problem-solving technique. We're discussing the comparison of these algorithms as an issue of stochastic advancement. There are two approaches to improving this process: ordinal advancement and optimizing the computing budget. To compare, we conduct computational testing on a set of algorithms from the IMSL library. The outcomes show that this strategy can decide the overall presentation of heuristic calculations with high certainty likelihood while utilizing a fraction of PC of what the traditional techniques require.
The algorithm is also in use while evaluating the final result. Now, Assume you have to find the value of a function that minimizes the cost function but, the parameters can’t be analyzed. In that case, you’d use gradient descent.<br/><br/>
Stochastic gradient descent is a simplistic approach to fitting linear classifiers and regressors. It has been a part of the machine learning community for way too long. However, the topic has received individual spotlight very recently. Given that data is sparse, the classifiers are advantageous as they can scale problems with more inbuilt features.
If I was to generalize it, gradient descent is just an optimizing technique. Its advantages range from efficiency to ease of implementation.<br/>
However, it does require a lot of hyperparameters, like the number of iterations. It also happens to be very sensitive to feature scaling. They have built-in support for sparse data in a format supported by scipy.parse, though.
Considering the second disadvantage, scanning your data is a good idea unless its attributes have an intrinsic scale. In which case, you can ignore the scanning.
I am hoping that you are curious to know the maths behind it. Don’t worry. It won’t be excruciatingly terrifying. Bear with my enthusiasm if it’s a little over the top. I find myself in familiar waters now. <br/><br/>
As we have already established, stochastic gradient descent is an optimizing algorithm that finds the best possible solution(w) to reduce a function Q. In a more mathematical sense, if you consider linear regression, w specifies the weight parameter, and Q(w) is the measure of error that the model makes in the data.
Now, the gradient descent is mathematically expressive in two different ways:
Through Normal gradient descent and in the presence of error objectives.If we were to re-write these formulas using iteration, it would be easier.<br/>
<br/>
w(t+1)=w(t)−η∇Qw(t)
<br/>
<br/>
Now w is going to determine the behavior of your function. For w(t), if we were to add a small vector, it would move towards optimization. The parameter η∈R determines the size of the step. The direction in itself depends on the gradient, Q.
If the value of n is significantly massive and ∇Q is complex ( in the machine learning neural networking scenario), the evaluation might not be smooth.<br/>
A solution to this problem would be estimating the value of ∇Q. An easy way to do so would be to randomly choose a term, say ‘a’ and then equate ∇Q to ∇Q(a). The advantage of the said solution must be clear. We can avoid stumbling on local minima in the error function. The disadvantages of the said algorithm are immediately brought into light when we dwell on the maths behind it. Given the gradient influences the direction, the gradient descent can lean to another direction.
The accuracy of the algorithm is brought into question as well. Although the answer may be close enough, the method is not feasible. Another disadvantage is that the process is so time-consuming that without computer assistance, it isn’t preferable.<br/>
But, isn’t it normal for everything to have a handset of advantages and disadvantages?
Sure the plate is always balanced, but we can’t shut our eyes to its use in the field of technology.
 </p>
      </div>
    </div>
  )
}
