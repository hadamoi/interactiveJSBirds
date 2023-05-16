This project aims to create an interactive website using mouse move event.

I created javascript code to change the translate: translateX,Y values of the images whenever the mouse is moved. The effect is to create a sense of layers in the images, giving the user a sense of space. 
My current code sets the stye.transform = translateX,Y value for each image so that I can control them individually. 

This is where I thought it could be improved:
I felt like the code was getting long and repetitive with each value.
I created a function to generate a random number 
I created a for loop that I put into each image's translate value, but duplicate numbers were being assigned to each image's style value.
assigned to each image's style value, resulting in a monotonous and identical movement that didn't feel spatial at all.
Create a function to generate random numbers, but exclude the duplicates.
I need to figure out a way to reassign each image's translate value.

Summary :
1. there are 6 animated images in the birds_item section.
2. for each image, let's put [0].style.transform = `translateX() translateY()` and for each x and y, let's put a random number with different minimum and maximum ranges.
3. then the total number of random numbers needed is 2 * 6 = 12.
4. we have randomized the x and y values for each image, but the problem is that the random values are not dated and are the same for all images. 
5. so how do we update those random values? This is the problem we need to solve.

mouse move event를 이용한 interactive 한 웹사이트 만들기를 목적으로 한 프로젝트입니다.

저는 마우스가 움직일 때마다 이미지의 translate: translateX,Y 값을 바뀌게 하는 javascript 코드를 만들었습니다. 이미지의 층이 느껴지는 효과로 사용자에게 공간감을 선사합니다. 
현재 코드는 이미지 하나하나에 stye.transform = translateX,Y 값을 설정하여 각각 컨트롤 할 수 있도록 하였습니다. 

좀 더 개선되면 좋겠다고 생각한 부분 :
각각 값을 넣어주다보니 코드가 길어지고 똑같은 동작이 반복된다고 느꼈다.
랜덤숫자를 만들어주는 함수를 만들어 
각각의 이미지의 translate값에 넣어주는 for loop를 만들었지만 중복된 숫자가
각 이미지 style 값에 할당되어서 단조롭고 똑같은 움직임이 발생되어 공간감이 전혀 느껴지지 않았다.
랜덤숫자를 만들어주는 함수를 만들되, 중복된 숫자는 제외하고
각각의 이미지의 translate값 다시 할당해 주는 코드로 개선되는 방법을 찾아야겠다.

요약 :
1. birds_item 구역에 움직이는 이미지가 6개 있다.
2. 각 이미지에 [0].style.transform = `translateX() translateY()` 이렇게 들어간다고 하면 각각의 x, y의 들어갈 값을 최소, 최대범위가 각각 다른 랜덤숫자를 넣는다.
3. 그렇다면 총 필요한 랜덤 숫자 개수는 2 * 6 = 12개.
4. 각 이미지에 랜덤하게 x, y 값이 들어갔지만, 문제는 그 랜덤값이 없데이트 되지 않고 동일하게 전체 이미지에 적용된다는 점이다. 
5. 그래서 그 랜덤값을 어떻게 없데이트 해야하는가 ? 이것이 해결해야할 문제이다.

// 0516 해결법 
각 이미지의 인덱스 숫자로 위치값을 변경해보자.
