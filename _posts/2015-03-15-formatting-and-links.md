---
layout: post
title:  A post with formatting
date: 2023-10-28
description: Post with different formats
tags: formatting code
categories: posts
giscus_comments: true
related_posts: false
related_publications: false
toc:
  sidebar: left
---
Here, I copied the different format that can be used in this blog.

## Lists
<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
</ul>

<hr>

<blockquote>
    This is a cite.
    —Me
</blockquote>

## Images

Images can be made zoomable.
Simply add `data-zoomable` to `<img>` tags that you want to make zoomable.


<div class="col-sm mt-3 mt-md-0">
    {% include figure.html path="assets/img/8.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>

<hr>

## Math expressions

You just need to surround your math expression with `$$`, like `$$ E = mc^2 $$`. If you leave it inside a paragraph, it will produce an inline expression, just like $$ E = mc^2 $$.

To use display mode, again surround your expression with `$$` and place it as a separate paragraph. Here is an example:

$$
\sum_{k=1}^\infty |\langle x, e_k \rangle|^2 \leq \|x\|^2
$$

You can also use `\begin{equation}...\end{equation}` instead of `$$` for display mode math.
MathJax will automatically number equations:

\begin{equation}
\label{eq:cauchy-schwarz}
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
\end{equation}

and by adding `\label{...}` inside the equation environment, we can now refer to the equation using `\eqref`.



## Tables

Using markdown to display tables is easy. Just use the following syntax:

```markdown
| Left aligned | Center aligned | Right aligned |
| :----------- | :------------: | ------------: |
| Left 1       | center 1       | right 1       |
| Left 2       | center 2       | right 2       |
| Left 3       | center 3       | right 3       |
```

That will generate:

| Left aligned | Center aligned | Right aligned |
| :----------- | :------------: | ------------: |
| Left 1       | center 1       | right 1       |
| Left 2       | center 2       | right 2       |
| Left 3       | center 3       | right 3       |

A sample blog page that demonstrates the inclusion of Tweets/Timelines/etc.

## Tweet
An example of displaying a tweet:
{% twitter https://twitter.com/rubygems/status/518821243320287232 %}

## Code
```python
s = "Python syntax highlighting"
print s
```

```r
s <- "R syntax highlighting"
print s
```

{% highlight c++ linenos %}
int main(int argc, char const \*argv[])
{
    string myString;

    cout << "input a string: ";
    getline(cin, myString);
    int length = myString.length();

    char charArray = new char * [length];

    charArray = myString;
    for(int i = 0; i < length; ++i){
        cout << charArray[i] << " ";
    }

    return 0;
}
{% endhighlight %}
