#include <bits/stdc++.h>
using namespace std;
const int N = 1e5+2;
bool dp[N];
void print(vl arr){
    fo(i, arr.size())
        cout<<arr[i]<<" ";
    cout<<endl;
}
void ttuple()
{
    ll a1[3], p1[3];
    ll &p = a1[0], &q = a1[1], &r = a1[2], &a = p1[0], &b = p1[1], &c = p1[2];
    cin>>p>>q>>r>>a>>b>>c;
    int cnt = 0;
    fo(i, 3)
    {
        if(a1[i]==p1[i]) cnt++;
    }
    int ans = 0;
    if(cnt==3)
    {
        cout<<0<<endl;
        return;
    }
    if(cnt==2)
    {
        cout<<1<<endl;
        return;
    }
    if(cnt==1)
    {
        if(a1[0]==p1[0])
        {
            if((p1[1]-a1[1]==p1[2]-a1[2]) || (a1[1]!=0 && a1[2]!=0 && p1[1]%a1[1]==0 && p1[2]%a1[2]==0 && (p1[1]/a1[1])==(p1[2]/a1[2])))
            {
                cout<<1<<endl;
                return;
            }
        }
        else if(a1[1]==p1[1])
        {
            if((p1[0]-a1[0]==p1[2]-a1[2]) || (a1[0]!=0 && a1[2]!=0 && p1[0]%a1[0]==0 && p1[2]%a1[2]==0 && (p1[0]/a1[0])==(p1[2]/a1[2])))
            {
                cout<<1<<endl;
                return;
            }
        }
        else if(a1[2]==p1[2])
        {
            if((p1[0]-a1[0]==p1[1]-a1[1]) || (a1[0]!=0 && a1[1]!=0 && p1[0]%a1[0]==0 && p1[1]%a1[1]==0 && (p1[0]/a1[0])==(p1[1]/a1[1])))
            {
                cout<<1<<endl;
                return;
            }
        }
        cout<<2<<endl;
        return;
    }
    if(cnt==0)
    {
        if((p1[0]-a1[0]==p1[1]-a1[1] && p1[1]-a1[1]==p1[2]-a1[2]) || (a1[1]!=0 && a1[2]!=0 && a1[0]!=0 && p1[0]%a1[0]==0 && p1[1]%a1[1]==0 && p1[2]%a1[2]==0 && (p1[0]/a1[0])==(p1[1]/a1[1]) && (p1[1]/a1[1])==(p1[2]/a1[2])))
        {
            cout<<1<<endl;
            return;
        }
        if((p1[1]-a1[1]==p1[2]-a1[2]) || (a1[1]!=0 && a1[2]!=0 && p1[1]%a1[1]==0 && p1[2]%a1[2]==0 && (p1[1]/a1[1])==(p1[2]/a1[2])))
        {
            cout<<2<<endl;
            return;
        }
        if((p1[0]-a1[0]==p1[2]-a1[2]) || (a1[0]!=0 && a1[2]!=0 && p1[0]%a1[0]==0 && p1[2]%a1[2]==0 && (p1[0]/a1[0])==(p1[2]/a1[2])))
        {
            cout<<2<<endl;
            return;
        }
        if((p1[0]-a1[0]==p1[1]-a1[1]) || (a1[0]!=0 && a1[1]!=0 && p1[0]%a1[0]==0 && p1[1]%a1[1]==0 && (p1[0]/a1[0])==(p1[1]/a1[1])))
        {
            cout<<2<<endl;
            return;
        }
        if((a-p)+(b-q)==(c-r) || (b-q)+(c-r)==(a-p) || (a-p)+(c-r)==(b-q))
        {
            cout<<2<<endl;
            return;
        }
        if(p!=0 && q!=0 && r!=0 && a%p==0 && b%q==0 && c%r==0 && ((a/p)*(b/q)==(c/r) || (a/p)*(c/r)==(b/q) || (b/q)*(c/r)==(a/p)))
        {
            cout<<2<<endl;
            return;
        }
        if(p!=0 && a%p==0 && ((b-((a/p)*q))==c-r || (c-((a/p)*r))==b-q))
        {
            cout<<2<<endl;
            return;
        }
        if(q!=0 && b%q==0 && ((a-((b/q)*p))==c-r || (c-((b/q)*r))==a-p))
        {
            cout<<2<<endl;
            return;
        }
        if(r!=0 && c%r==0 && ((b-((c/r)*q))==a-p || (a-((c/r)*p))==b-q))
        {
            cout<<2<<endl;
            return;
        }
        if(r!=0 && c%r==0 && ((q+a-p!=0 && b%(q+a-p)==0 && b/(q+a-p)==c/r) || (p+b-q!=0 && a%(p+b-q)==0 && a/(p+b-q)==c/r)))
        {
            cout<<2<<endl;
            return;
        }
        if(q!=0 && b%q==0 && ((p+c-r!=0 && a%(p+c-r)==0 && a/(p+c-r)==b/q) || (r+a-p!=0 && c%(r+a-p)==0 && c/(r+a-p)==b/q)))
        {
            cout<<2<<endl;
            return;
        }
        if(p!=0 && a%p==0 && ((q+c-r!=0 && b%(q+c-r)==0 && b/(q+c-r)==a/p) || (r+b-q!=0 && c%(r+b-q)==0 && c/(r+b-q)==a/p)))
        {
            cout<<2<<endl;
            return;
        }
        cout<<3<<endl;
        return;
    }
}
int main()
{

    int n;
    cin>>n;
    while(n--)
		ttuple();
    return 0;
}