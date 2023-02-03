$\renewcommand{\rm}{\mathrm}
\newcommand{\bm}[0]{\boldsymbol}
\newcommand{\brac}[1]{{\left(#1\right)}}
\newcommand{\bracc}[1]{{\left[#1\right]}}
\newcommand{\braccc}[1]{{\left\{#1\right\}}}
\newcommand{\ii}[0]{\mathrm{i}}
\newcommand{\dag}[0]{\dagger}
\renewcommand{\cal}{\mathcal}
\renewcommand{\scr}{\mathscr}
\newcommand{\frak}{\mathfrak}
\newcommand{\bb}{\mathbb}
\renewcommand{\sf}{\mathsf}
\newcommand{\pprime}[0]{{\prime\prime}}
\newcommand{\ppprime}[0]{{\prime\prime\prime}}
\newcommand{\eqref}[1]{{\mbox{式}\,\left(\ref{#1}\right)}}
\newcommand{\|}[1]{{\left.#1\right|}}$

# 散射问题的渐近理论与 $S$ 矩阵

​		以下分析中默认选择 Heisenberg 绘景, 时空维数为 $d=D+1$, 其中 $D$ 为空间维数, 并且以实标量场为例进行分析.

## 自由场系统的生成泛函

​		对于自由场算子, 设其满足自由场方程
$$
\scr{D}\brac{x}\phi\brac{x}=0,
$$
其中 $\scr{D}\brac{x}=-\brac{\partial^2+m^2}$. $\phi$ 可以展开为
$$
\phi\brac{x}=\int{\dd}^Dk\bracc{a_\bm{k}\varphi_\bm{k}\brac{x}+a^\dag_\bm{k}\varphi_\bm{k}^\ast\brac{x}},
$$
其中 $\varphi_\bm{k}\brac{x}=\varphi_\bm{k}\brac{t,\bm{x}}=\frac{1}{\sqrt{\brac{2\pi}^32\omega_\bm{k}}}e^{-\ii\brac{\omega_\bm{k}t-\bm{k}\cdot\bm{x}}}$, $\omega_\bm{k}=\sqrt{\left|\bm{k}\right|^2+m^2}$, $\bracc{a_{\bm{k}^\prime},a_{\bm{k}^\pprime}^\dag}=\delta^\brac{D}\brac{\bm{k}^\prime-\bm{k}^\pprime}$, 系统的真空态定义为 $a_\bm{k}\ket{0}=0$.

其生成泛函 $Z_0\brac{J}$ 定义为
$$
Z_0\brac{J}=\bra{0}\sf{T}\exp\bracc{\ii\int{\dd}^dxJ\brac{x}\phi\brac{x}}\ket{0},
$$
可以证明
$$
Z_0\brac{J}=\exp\braccc{\frac{1}{2}\int{\dd}^dx{\dd}^dy\ii J\brac{x}\ii\Delta_F\brac{x,y}\ii J\brac{y}}.
$$

## 相互作用场系统的生成泛函

​		相互作用场系统的拉氏密度 $\cal{L}$​ 包括自由部分 $\cal{L}_0$​ 和相互作用部分 $\cal{L}_I$​, $\cal{L}=\cal{L}_0+\cal{L}_I$, 相应的作用量为 $S=S_0+S_I$. 其场算子的运动方程为
$$
\scr{D}\brac{x}\phi\brac{x}=-\brac{\dfrac{\partial\cal{L}_I}{\partial \phi}-\partial_\mu\dfrac{\partial\cal{L}_I}{\partial\partial_\mu\phi}}.
$$
其生成泛函 $Z\brac{J}$ 定义为
$$
Z\brac{J}=\bra{0}\sf{T}\exp\bracc{\ii\int{\dd}^dxJ\brac{x}\phi\brac{x}}\ket{0},
$$
可以证明
$$
Z\brac{J}=\exp\bracc{\ii S_I\brac{\dfrac{\delta}{\ii\delta J},\partial\dfrac{\delta}{\ii\delta J}}}Z_0\brac{J}.
$$

## 渐近场与渐近态

​		设系统的哈密顿量可以分为自由部分和相互作用部分, 
$$
H\brac{t}=H_0\brac{t}+H^\prime\brac{t}.
$$
由力学量的运动方程, 
$$
\ii \dot{\cal{O}}\brac{t}=\bracc{\cal{O}\brac{t},H\brac{t}},
$$
可知 $\dot{H}\brac{t}=0$, 即 $H\brac{t}$ 实际上不含时. 因此将其记为 $H\brac{t}=H$. 但由于 $H_0\brac{t}$ 以及 $H^\prime\brac{t}$ 一般并不与 $H$ 对易, 因此一般情况下 $\dot{H}_0\brac{t}$ 和 $\dot{H}^\prime\brac{t}$ 并不为零, 总结起来即有 
$$
H=H_0\brac{t}+H^\prime\brac{t},
$$
即两个含时的部分相加得到一个不含时的总哈密顿量.

​		为了研究散射问题, 引入两套渐近的自由场论, 分别称为 in 场和 out 场, 统称为 as 场. 在这两套渐近的自由场论中, 系统按自由哈密顿量 $H_{0\rm{as}}\brac{t}$ 演化, 即
$$
\ii\dot{\cal{O}}_\rm{as}\brac{t}=\bracc{\cal{O}_\rm{as}\brac{t},H_{0\rm{as}}\brac{t}},
$$
由此可知, 
$$
\dot{H}_{0\rm{as}}\brac{t}=0,
$$
即 $H_{0\rm{as}}\brac{t}$ 实际上不含时, 因此将其记为 $H_{0\rm{as}}\brac{t}=H_{0\rm{as}}$. 但由于 $H_\rm{as}\brac{t}$ 以及 $H^\prime_\rm{as}\brac{t}$ 一般并不与 $H_{0\rm{as}}$ 对易, 因此一般情况下 $\dot{H}_\rm{as}\brac{t}$ 和 $\dot{H}^\prime_\rm{as}\brac{t}$ 并不为零, 总结起来即有
$$
H_{0\rm{as}}=H_\rm{as}\brac{t}-H^\prime_\rm{as}\brac{t},
$$
即两个含时的部分相减得到一个不含时的自由哈密顿量.

与两套渐近场论相应的, 存在两套渐近态 $\ket{\rm{in}}$ 和 $\ket{\rm{out}}$, 即
$$
\begin{equation}
\begin{aligned}
&H_{0\rm{in}}\ket{\alpha,\rm{in}}=E_\alpha\ket{\alpha,\rm{in}};
\\
&H_{0\rm{out}}\ket{\alpha,\rm{out}}=E_\alpha\ket{\alpha,\rm{out}}.
\end{aligned}
\end{equation}
$$
从散射问题的物理情况考虑, 可以设 $H_{0\rm{as}}$ 和 $H$ 具有相同的谱. 对于力学量 $\cal{O}$ 有如下渐近条件,
$$
\begin{equation}
\begin{aligned}
&\cal{O}_\rm{in}=\cal{O}\brac{-\infty};
\\
&\cal{O}_\rm{out}=\cal{O}\brac{+\infty}.
\end{aligned}
\end{equation}
$$
在渐近场论中, 由力学量 $\cal{O}_\rm{as}\brac{t}$​ 的演化方程
$$
\ii\dot{\cal{O}}_\rm{as}\brac{t}=\bracc{\cal{O}_\rm{as}\brac{t},H_{0\rm{as}}}
$$
可以解得
$$
\cal{O}_\rm{as}\brac{t}=e^{\ii H_{0\rm{as}}\brac{t-t_0}}\cal{O}_\rm{as}\brac{t_0}e^{-\ii H_{0\rm{as}}\brac{t-t_0}}.
$$
另外, 在非渐近场论中, 由力学量 $\cal{O}\brac{t}$ 的演化方程
$$
\ii\dot{\cal{O}}\brac{t}=\bracc{\cal{O}\brac{t},H}
$$
可以解得
$$
\cal{O}\brac{t}=e^{\ii H\brac{t-t_0}}\cal{O}\brac{t_0}e^{-\ii H\brac{t-t_0}}.
$$
由渐近条件可知, 
$$
\cal{O}_\rm{in}\brac{t}=e^{\ii H_{0\rm{in}}\bracc{t-\brac{-\infty}}}e^{-\ii H\bracc{t-\brac{-\infty}}}\cal{O}\brac{t}e^{\ii H\bracc{t-\brac{-\infty}}}e^{-\ii H_{0\rm{in}}\bracc{t-\brac{-\infty}}}.
$$
从而
$$
H_{0\rm{in}}=e^{\ii H_{0\rm{in}}\bracc{\brac{+\infty}-\brac{-\infty}}}e^{-\ii H\bracc{\brac{+\infty}-\brac{-\infty}}}H_0\brac{+\infty}
\\
e^{\ii H\bracc{\brac{+\infty}-\brac{-\infty}}}e^{-\ii H_{0\rm{in}}\bracc{\brac{+\infty}-\brac{-\infty}}},
$$
定义 $U\brac{t,t_0}=e^{\ii H_{0\rm{in}}\bracc{t-t_0}}e^{-\ii H\bracc{t-t_0}}$, 则 $H_{0\rm{in}}=U\brac{+\infty,-\infty}H_0U^\dag\brac{+\infty,-\infty}$. 而由于
$$
H_{0\rm{out}}=H_0\brac{+\infty},
$$
因此
$$
H_{0\rm{in}}=e^{\ii H_{0\rm{in}}\bracc{\brac{+\infty}-\brac{-\infty}}}e^{-\ii H\bracc{\brac{+\infty}-\brac{-\infty}}}H_{0\rm{out}}
\\
e^{\ii H\bracc{\brac{+\infty}-\brac{-\infty}}}e^{-\ii H_{0\rm{in}}\bracc{\brac{+\infty}-\brac{-\infty}}},
$$
由此可得
$$
H_{0\rm{in}}e^{-\ii H\bracc{\brac{+\infty}-\brac{-\infty}}}\ket{\alpha,\rm{out}}=E_\alpha e^{-\ii H\bracc{\brac{+\infty}-\brac{-\infty}}}\ket{\alpha,\rm{out}},
$$
从而
$$
e^{-\ii H\bracc{\brac{+\infty}-\brac{-\infty}}}\ket{\alpha,\rm{out}}\propto\ket{\alpha,\rm{in}},
$$
设 $\ket{\alpha,\rm{in}}$ 和 $\ket{\alpha,\rm{out}}$ 均已归一化, 则上述比例系数的模为 $1$, 因此可以设为 $e^{\ii\varphi_\alpha}$​, 即
$$
e^{-\ii H\bracc{\brac{+\infty}-\brac{-\infty}}}\ket{\alpha,\rm{out}}=e^{\ii\varphi_\alpha}\ket{\alpha,\rm{in}}.\label{带相位的S算子}
$$

## $S$ 算子与 $S$ 矩阵

​		定义 $S$ 算子为 $\ket{\alpha,\rm{out}}$ 与 $\ket{\alpha,\rm{in}}$ 之间的幺正变换算子, 
$$
\ket{\alpha,\rm{in}}=S\ket{\alpha,\rm{out}},
$$
而 $S$ 算子在 in 态的矩阵元为
$$
S_{\beta\alpha}=\bra{\beta,\rm{in}}S\ket{\alpha,\rm{in}}=\braket{\beta,\rm{out}}{\alpha,\rm{in}},
$$
其物理意义即为 $t\to-\infty$ 时刻的 $\ket{\alpha,\rm{in}}$ 渐近态演化至 $t\to+\infty$ 时刻后处于 $\ket{\beta,\rm{out}}$ 渐近态的振幅. 由 $\eqref{带相位的S算子}$ 可知, $S$ 矩阵元可以有一个任意的相位因子, 由此可知
$$
S_{\beta\alpha}=e^{-\ii\varphi_\beta}\bra{\beta,\rm{in}}e^{-\ii H\bracc{\brac{+\infty}-\brac{-\infty}}}\ket{\alpha,\rm{in}},
$$
为了方便, 将相位 $\varphi_\beta$ 选为 $-E_\beta\bracc{\brac{+\infty}-\brac{-\infty}}$, 由此可将 $S$ 矩阵元写为
$$
\begin{equation}
\begin{aligned}
S_{\beta\alpha}&=\bra{\beta,\rm{in}}e^{\ii E_\beta\bracc{\brac{+\infty}-\brac{-\infty}}}e^{-\ii H\bracc{\brac{+\infty}-\brac{-\infty}}}\ket{\alpha,\rm{in}}
\\
&=\bra{\beta,\rm{in}}e^{\ii H_{0\rm{in}}\bracc{\brac{+\infty}-\brac{-\infty}}}e^{-\ii H\bracc{\brac{+\infty}-\brac{-\infty}}}\ket{\alpha,\rm{in}}
\\
&=\bra{\beta,\rm{in}}U\brac{+\infty,-\infty}\ket{\alpha,\rm{in}},
\end{aligned}
\end{equation}
$$
由此可以将 $S$ 算子定义为
$$
S=U\brac{+\infty,-\infty}.
$$
只需求出 $U\brac{t,t_0}$, 即可求出 $S$ 算子. 为了确保 $t>t_0$, 将 $t_0$ 取为 $-\infty$, 则
$$
U\brac{t,-\infty}=e^{\ii H_{0\rm{in}}\bracc{t-\brac{-\infty}}}e^{-\ii H\bracc{t-\brac{-\infty}}}.
$$
这只是一个形式表达式, 无法进行具体计算. 为了将其改写为可以实际计算的形式, 将 $U\brac{t,-\infty}$ 对 $-\ii t$ 求导,得
$$
\begin{equation}
\begin{aligned}
\ii \dfrac{\partial}{\partial t}U\brac{t,-\infty}&=e^{\ii H_{0\rm{in}}\bracc{t-\brac{-\infty}}}\brac{H-H_{0\rm{in}}}e^{-\ii H\bracc{t-\brac{-\infty}}}
\\
&=e^{\ii H_{0\rm{in}}\bracc{t-\brac{-\infty}}}He^{-\ii H\bracc{t-\brac{-\infty}}}-H_{0\rm{in}}U\brac{t,-\infty}
\\
&=e^{\ii H_{0\rm{in}}\bracc{t-\brac{-\infty}}}He^{-\ii H_{0\rm{in}}\bracc{t-\brac{-\infty}}}U\brac{t,-\infty}-H_{0\rm{in}}
\\
&=\brac{H_\rm{in}\brac{t}-H_{0\rm{in}}}U\brac{t,-\infty}
\\
&=H^\prime_\rm{in}\brac{t}U\brac{t,-\infty},
\end{aligned}
\end{equation}
$$
由初始条件 $U\brac{-\infty,-\infty}=1$, 可以解得
$$
U\brac{t,-\infty}=\sf{T}\exp\bracc{-\ii\int_{-\infty}^t{\dd}t^\prime H^\prime_\rm{in}\brac{t^\prime}},
$$
由此可知
$$
S=U\brac{+\infty,-\infty}=\sf{T}\exp\bracc{-\ii\int_{-\infty}^{+\infty}{\dd}tH^\prime_\rm{in}\brac{t}}.
$$
明确而言, 由于 $H^\prime_\rm{in}\brac{t}=\int{\dd}^Dx\cal{H}^\prime\brac{\phi_\rm{in}\brac{t,\bm{x}},\pi_\rm{in}\brac{t,\bm{x}}}=-\int{\dd}^Dx\cal{L}_I\brac{\phi_\rm{in}\brac{t,\bm{x}},\partial\phi_\rm{in}\brac{t,\bm{x}}}$, 其中 $\cal{H}^\prime$ 和 $\cal{L}_I$ 分别为系统哈氏密度和拉氏密度的相互作用部分, 由此可知, 
$$
\begin{equation}
\begin{aligned}
S&=\sf{T}\exp\bracc{-\ii\int_{-\infty}^{+\infty}{\dd}tH^\prime_\rm{in}\brac{t}}
\\
&=\sf{T}\exp\bracc{-\ii\int_{-\infty}^{+\infty}{\dd}tH^\prime\brac{\phi_\rm{in}\brac{t},\pi_\rm{in}\brac{t}}}
\\
&=\sf{T}\exp\bracc{\ii\int{\dd}^dx\cal{L}_I\brac{\phi_\rm{in}\brac{x},\partial\phi_\rm{in}\brac{x}}}
\\
&=\|{\sf{T}e^{\ii\int{\dd}^dx\cal{L}_I\brac{\frac{\delta}{\ii\delta J\brac{x}},\partial\frac{\delta}{\ii\delta J\brac{x}}}}e^{\ii\int{\dd}^dxJ\brac{x}\phi_\rm{in}\brac{x}}}_{J=0}
\\
&=\|{e^{\ii\int{\dd}^dx\cal{L}_I\brac{\frac{\delta}{\ii\delta J\brac{x}},\partial\frac{\delta}{\ii\delta J\brac{x}}}}\sf{T}e^{\ii\int{\dd}^dxJ\brac{x}\phi_\rm{in}\brac{x}}}_{J=0}
\\
&=\|{e^{\ii S_I\brac{\frac{\delta}{\ii\delta J},\partial\frac{\delta}{\ii\delta J}}}\sf{T}e^{\ii\int{\dd}^dxJ\brac{x}\phi_\rm{in}\brac{x}}}_{J=0},
\end{aligned}
\end{equation}
$$
令 $S\brac{J}=e^{\ii S_I\brac{\frac{\delta}{\ii\delta J},\partial\frac{\delta}{\ii\delta J}}}\sf{T}e^{\ii\int{\dd}^dxJ\brac{x}\phi_\rm{in}\brac{x}}$, 则 $S=S\brac{J=0}$.

​		若算子 $A$, $B$ 满足 $\bracc{\bracc{A,B},A}=\bracc{\bracc{A,B},B}=0$, 有 $e^Ae^B=e^{A+B}e^{\frac{1}{2}\bracc{A,B}}$.

​		对于渐近 in 算子 $A_\rm{in}\brac{t}$, 假设 $\bracc{A_\rm{in}\brac{t^\prime},A_\rm{in}\brac{t^\pprime}}$ 为 $c$ 数, 有
$$
\sf{T}e^{\int_{t_0}^t{\dd}t^\prime A_\rm{in}\brac{t^\prime}}=\sf{N}e^{\int_{t_0}^t{\dd}t^\prime A_\rm{in}\brac{t^\prime}}e^{\frac{1}{2}\int_{t_0}^t{\dd}t^\prime{\dd}t^\pprime\bra{0,\rm{in}}\sf{T}A_\rm{in}\brac{t^\prime}A_\rm{in}\brac{t^\pprime}\ket{0,\rm{in}}},
$$
其中 $\ket{0,\rm{in}}$ 为 in 场的基态. 又由于
$$
\begin{equation}
\begin{aligned}
&\bra{0,\rm{in}}\sf{T}\phi_\rm{in}\brac{x}\phi_\rm{in}\brac{y}\ket{0,\rm{in}}=\ii\Delta_F\brac{x,y};
\\
&\scr{D}\brac{x}\phi_\rm{in}\brac{x}=0;
\\
&\scr{D}\brac{x}\Delta_F\brac{x,y}=\delta^\brac{d}\brac{x,y},
\end{aligned}
\end{equation}
$$
因此,
$$
\begin{equation}
\begin{aligned}
S\brac{J}&=e^{\ii S_I\brac{\frac{\delta}{\ii\delta J},\partial\frac{\delta}{\ii\delta J}}}\sf{T}e^{\ii\int{\dd}^dxJ\brac{x}\phi_\rm{in}\brac{x}}
\\
&=e^{\ii S_I\brac{\frac{\delta}{\ii\delta J},\partial\frac{\delta}{\ii\delta J}}}\sf{N}e^{\ii\int{\dd}^dxJ\brac{x}\phi_\rm{in}\brac{x}}e^{\frac{1}{2}\int{\dd}^dy{\dd}^dz\ii J\brac{y}\ii\Delta_F\brac{y,z}\ii J\brac{z}}
\\
&=e^{\ii S_I\brac{\frac{\delta}{\ii\delta J},\partial\frac{\delta}{\ii\delta J}}}\sf{N}e^{-\int{\dd}^dx\phi_\rm{in}\brac{x}\scr{D}\brac{x}\frac{\delta}{\delta J\brac{x}}}e^{\frac{1}{2}\int{\dd}^dy{\dd}^dz\ii J\brac{y}\ii\Delta_F\brac{y,z}\ii J\brac{z}}
\\
&=\sf{N}e^{-\int{\dd}^dx\phi_\rm{in}\brac{x}\scr{D}\brac{x}\frac{\delta}{\delta J\brac{x}}}e^{\ii S_I\brac{\frac{\delta}{\ii\delta J},\partial\frac{\delta}{\ii\delta J}}}e^{\frac{1}{2}\int{\dd}^dy{\dd}^dz\ii J\brac{y}\ii\Delta_F\brac{y,z}\ii J\brac{z}}
\\
&=\sf{N}e^{-\ii\int{\dd}^dx\phi_\rm{in}\brac{x}\scr{D}\brac{x}\frac{\delta}{\ii\delta J\brac{x}}}e^{\ii S_I\brac{\frac{\delta}{\ii\delta J},\partial\frac{\delta}{\ii\delta J}}}Z_0\brac{J}
\\
&=\sf{N}e^{-\ii\int{\dd}^dx\phi_\rm{in}\brac{x}\scr{D}\brac{x}\frac{\delta}{\ii\delta J\brac{x}}}Z\brac{J},
\end{aligned}
\end{equation}
$$
从而
$$
S=\|{\braccc{\sf{N}\bracc{e^{-\ii\int{\dd}^dx\phi_\rm{in}\brac{x}\scr{D}\brac{x}\frac{\delta}{\ii\delta J\brac{x}}}}Z\brac{J}}}_{J=0},
$$
此即 $S$ 算子的 LSZ 约化公式.
