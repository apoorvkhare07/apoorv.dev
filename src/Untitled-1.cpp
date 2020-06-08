#include <bits/stdc++.h>
using namespace std;

int main() {
	int t;
	cin>>t;
	while(t--){
		int a,b,c,p,q,r;
		cin>>a>>b>>c;
		cin>>p>>q>>r;
		int sc=0;
		if(a==p)
			sc++;
		if(b==q)
			sc++;
		if(c==r)
			sc++;

		if(sc==3)
			cout<<0<<endl;
		else if(sc==2)
			cout<<1<<endl;
		else if(sc==1){
			int x1,x2,y1,y2;
			if(a==p){
				x1=b;
				x2=c;
				y1=q;
				y2=r;
			}
			if(b==q){
				x1=a;
				x2=c;
				y1=p;
				y2=r;
			}
			if(c==r){
				x1=a;
				x2=b;
				y1=p;
				y2=q;
			}

			if(y1-x1 == y2-x2)
				cout<<1<<endl;
			else if(x1!= 0 &&x2!= 0 && (y1%x1 ==0 && y2%x2==0) && (y1/x1 == y2/x2) )
				cout<<1<<endl;
			else
				cout<<2<<endl;
		}

		else if(sc == 0)
        {
			if( (p-a == q-b) && (r-c == q-b) || ((a!=0 && b!=0 &&c!=0) && (p%a==0 && q%b==0 && r%c==0) && (p/a == q/b && p/a == r/c))){
				cout<<1<<endl;
			}
			else if(p-a == q-b || ((a!=0 && b!=0) && (p%a ==0 && q%b==0) && (p/a == q/b)))
				cout<<2<<endl;
			else if(p-a == r-c || ((a!=0 && c!=0) && (p%a ==0 && r%c==0) && (p/a == r/c)))
				cout<<2<<endl;
			else if(q-b == r-c || ((b!=0 && c!=0) && (q%b ==0 && r%c==0) && (q/b == r/c)))
				cout<<2<<endl;

			else if ( (p-a) + (q-b) == (r-c) || (p-a) + (r-c) == (q-b) || (r-c) + (q-b) == (p-a)  )
				cout<<2<<endl;
			else if(a!=0 && b!=0 && c!=0 && p%a==0 && q%b==0 && r%c==0 && ((p/a)*(q/b)==(r/c) || (p/a)*(r/c)==(q/b) || (q/b)*(r/c)==(p/a)))
                cout<<2<<endl;

        else if(a!=0 && p%a==0 && ((q-((p/a)*b))==r-c || (r-((p/a)*c))==q-b))
        {
            cout<<2<<endl;

        }
        else if(b!=0 && q%b==0 && ((p-((q/b)*a))==r-c || (r-((q/b)*c))==p-a))
        {
            cout<<2<<endl;

        }
        else if(c!=0 && r%c==0 && ((q-((r/c)*b))==p-a || (p-((r/c)*a))==q-b))
        {
            cout<<2<<endl;

        }

        else if(c!=0 && r%c==0 && ((b+p-a!=0 && q%(b+p-a)==0 && q/(b+p-a)==r/c) || (a+q-b!=0 && p%(a+q-b)==0 && p/(a+q-b)==r/c)))
        {
            cout<<2<<endl;

        }
        else if(b!=0 && q%b==0 && ((a+r-c!=0 && p%(a+r-c)==0 && p/(a+r-c)==q/b) || (c+p-a!=0 && r%(c+p-a)==0 && r/(c+p-a)==q/b)))
        {
            cout<<2<<endl;

        }
        else if(a!=0 && p%a==0 && ((b+r-c!=0 && q%(b+r-c)==0 && q/(b+r-c)==p/a) || (c+q-b!=0 && r%(c+q-b)==0 && r/(c+q-b)==p/a)))
        {
            cout<<2<<endl;

        }
		else
			cout<<3<<endl;
		}

	}
	return 0;
}