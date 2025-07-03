<template>
  <div class="min-h-screen pt-20 pb-16 relative overflow-hidden">
    <!-- Enhanced Animated Background Elements -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-accent/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"
      ></div>
      <div
        class="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse delay-500"
      ></div>
      <div
        class="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-1500"
      ></div>

      <!-- Add subtle grid pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto space-y-12">
        <!-- Enhanced Hero Section with Better Effects -->
        <div class="text-center space-y-6 animate-fade-in-up">
          <div class="relative">
            <h1
              class="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent animate-gradient-x"
            >
              About Me
            </h1>
            <div
              class="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-purple-600/20 blur-xl rounded-lg -z-10 animate-pulse"
            ></div>
          </div>
          <div class="relative group">
            <div
              class="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-purple-600/10 blur-2xl rounded-2xl transition-all duration-500 group-hover:blur-3xl animate-pulse"
            ></div>
            <p
              class="text-xl text-muted-foreground max-w-2xl mx-auto relative z-10 p-6 backdrop-blur-sm border border-white/10 rounded-xl shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105"
            >
              Passionate about creating innovative solutions and building impactful applications
              with cutting-edge technologies
            </p>
          </div>
        </div>

        <!-- Enhanced Main Content Grid -->
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Enhanced Bio Section -->
          <div class="space-y-6">
            <Card class="p-8 card-enhanced">
              <div class="space-y-6">
                <div class="flex items-center gap-4">
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-primary via-accent to-purple-500 rounded-full flex items-center justify-center floating icon-glow pulse-glow shadow-lg"
                  >
                    <User class="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 class="text-2xl font-bold gradient-title">Derric Samson</h2>
                    <p class="text-muted-foreground flex items-center gap-2">
                      <Code2 class="w-4 h-4 text-accent" />
                      Full-Stack Developer
                    </p>
                  </div>
                </div>

                <div class="prose prose-neutral dark:prose-invert max-w-none">
                  <p class="text-base leading-relaxed">
                    I'm a passionate full-stack developer with a strong foundation in modern web
                    technologies. Currently pursuing my B.Sc in Data Science from IIT Madras while
                    having completed my B.Tech in Information Technology from Presidency College,
                    Bengaluru.
                  </p>
                  <p class="text-base leading-relaxed">
                    I love building innovative web solutions that solve real-world problems and
                    create meaningful user experiences. My journey in technology has been driven by
                    curiosity and a desire to continuously learn and adapt to new challenges.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <!-- Enhanced Education & Quick Info -->
          <div class="space-y-6">
            <!-- Education with enhanced styling -->
            <Card class="p-6 card-enhanced">
              <CardHeader class="pb-4">
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-md animate-pulse"
                  >
                    <GraduationCap class="w-6 h-6 text-white" />
                  </div>
                  <CardTitle class="gradient-title">Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent class="space-y-4">
                <div class="space-y-3">
                  <div
                    class="border-l-2 border-gradient-l pl-4 hover:border-l-4 transition-all duration-300 hover:pl-6 group"
                  >
                    <div
                      class="absolute -left-2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all"
                    ></div>
                    <h3 class="font-semibold flex items-center gap-2">
                      <BookOpen class="w-4 h-4 text-primary" />
                      B.Sc in Data Science
                    </h3>
                    <p class="text-muted-foreground flex items-center gap-2">
                      <Building2 class="w-3 h-3" />
                      IIT Madras
                    </p>
                    <p class="text-sm text-muted-foreground flex items-center gap-2">
                      <Calendar class="w-3 h-3" />
                      2023 – 2027
                    </p>
                  </div>
                  <div
                    class="border-l-2 border-gradient-accent pl-4 hover:border-l-4 transition-all duration-300 hover:pl-6 group"
                  >
                    <div
                      class="absolute -left-2 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all"
                    ></div>
                    <h3 class="font-semibold flex items-center gap-2">
                      <BookOpen class="w-4 h-4 text-accent" />
                      B.Tech in Information Technology
                    </h3>
                    <p class="text-muted-foreground flex items-center gap-2">
                      <Building2 class="w-3 h-3" />
                      Presidency College, Bengaluru
                    </p>
                    <p class="text-sm text-muted-foreground flex items-center gap-2">
                      <Calendar class="w-3 h-3" />
                      2023 – 2027 • CGPA: 8.15
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <!-- Enhanced Contact Info -->
            <Card class="p-6 card-enhanced">
              <CardHeader class="pb-4">
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-md animate-pulse"
                  >
                    <Mail class="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Get In Touch</CardTitle>
                </div>
              </CardHeader>
              <CardContent class="space-y-3">
                <div class="flex items-center gap-3 contact-item">
                  <div
                    class="w-8 h-8 rounded-full bg-gradient-to-r from-green-500/80 to-emerald-500/80 flex items-center justify-center"
                  >
                    <Mail class="w-4 h-4 text-white" />
                  </div>
                  <a
                    href="mailto:derricsamson17@gmail.com"
                    class="text-sm hover:text-primary transition-colors"
                  >
                    derricsamson17@gmail.com
                  </a>
                </div>
                <div class="flex items-center gap-3 contact-item">
                  <div
                    class="w-8 h-8 rounded-full bg-gradient-to-r from-gray-600/80 to-gray-800/80 flex items-center justify-center"
                  >
                    <Github class="w-4 h-4 text-white" />
                  </div>
                  <a
                    href="https://github.com/Derric01"
                    target="_blank"
                    class="text-sm hover:text-primary transition-colors"
                  >
                    github.com/Derric01
                  </a>
                </div>
                <div class="flex items-center gap-3 contact-item">
                  <div
                    class="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600/80 to-blue-800/80 flex items-center justify-center"
                  >
                    <Linkedin class="w-4 h-4 text-white" />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/derric-samson-409a642b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    class="text-sm hover:text-primary transition-colors"
                  >
                    linkedin.com/in/derric-samson-409a642b9
                  </a>
                </div>
                <div class="flex items-center gap-3 contact-item">
                  <div
                    class="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600/80 to-pink-600/80 flex items-center justify-center"
                  >
                    <Instagram class="w-4 h-4 text-white" />
                  </div>
                  <a
                    href="https://instagram.com/derric_mars"
                    target="_blank"
                    class="text-sm hover:text-primary transition-colors"
                  >
                    @derric_mars
                  </a>
                </div>
                <div class="flex items-center gap-3 contact-item">
                  <div
                    class="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600/80 to-purple-600/80 flex items-center justify-center"
                  >
                    <MessageCircle class="w-4 h-4 text-white" />
                  </div>
                  <a
                    href="https://discord.com/users/1266316116016238707"
                    target="_blank"
                    class="text-sm hover:text-primary transition-colors"
                  >
                    Discord: Derric#1266
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <!-- Skills Section -->
        <Card class="p-8 card-enhanced">
          <CardHeader class="pb-6">
            <div class="flex items-center gap-3">
              <Code class="w-6 h-6 text-primary pulse-glow" />
              <CardTitle class="text-2xl gradient-title">Technical Skills</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Programming Languages -->
              <div class="space-y-3">
                <h3 class="font-semibold text-lg flex items-center gap-2">
                  <Terminal class="w-5 h-5 text-primary" />
                  Languages
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="skill in programmingLanguages" :key="skill" class="skill-tag">
                    {{ skill }}
                  </span>
                </div>
              </div>

              <!-- Frontend -->
              <div class="space-y-3">
                <h3 class="font-semibold text-lg flex items-center gap-2">
                  <Palette class="w-5 h-5 text-primary" />
                  Frontend
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="skill in frontendSkills" :key="skill" class="skill-tag">
                    {{ skill }}
                  </span>
                </div>
              </div>

              <!-- Backend & Database -->
              <div class="space-y-3">
                <h3 class="font-semibold text-lg flex items-center gap-2">
                  <Server class="w-5 h-5 text-primary" />
                  Backend
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="skill in backendSkills" :key="skill" class="skill-tag">
                    {{ skill }}
                  </span>
                </div>
              </div>

              <!-- Tools & Technologies -->
              <div class="space-y-3 md:col-span-2 lg:col-span-3">
                <h3 class="font-semibold text-lg flex items-center gap-2">
                  <Wrench class="w-5 h-5 text-primary" />
                  Tools & Technologies
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="skill in toolsSkills" :key="skill" class="skill-tag">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Call to Action -->
        <div class="text-center space-y-6">
          <h2 class="text-2xl font-bold">Ready to Work Together?</h2>
          <p class="text-muted-foreground">
            I'm always interested in discussing new opportunities and innovative projects.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button as="router-link" to="/projects" size="lg">
              <FolderOpen class="w-5 h-5 mr-2" />
              View My Work
            </Button>
            <Button as="router-link" to="/contact" variant="outline" size="lg">
              <Mail class="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  User,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Code,
  Code2,
  Terminal,
  Palette,
  Server,
  Wrench,
  FolderOpen,
  Instagram,
  MessageCircle,
  BookOpen,
  Building2,
  Calendar,
} from 'lucide-vue-next'
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Button from '@/components/ui/Button.vue'

const programmingLanguages = ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'C']

const frontendSkills = ['React.js', 'Vue.js', 'Next.js', 'Tailwind CSS', 'ShadCN', 'Redux']

const backendSkills = ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Redis', 'REST API']

const toolsSkills = ['Git', 'GitHub', 'Postman', 'Stripe', 'Vite', 'VS Code']
</script>

<style scoped>
.card-enhanced:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 8px 30px rgba(0, 100, 255, 0.2);
}

.skill-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(to right, rgba(0, 100, 255, 0.1), rgba(0, 255, 255, 0.1));
  border: 1px solid rgba(0, 100, 255, 0.2);
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: linear-gradient(to right, rgba(0, 100, 255, 0.2), rgba(0, 255, 255, 0.2));
  border-color: rgba(0, 100, 255, 0.4);
  transform: translateY(-2px);
}

/* Enhanced Styles for About Page */
.card-enhanced {
  transition: all 0.5s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  transition: all 0.5s ease;
  border-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  transition: all 0.5s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
}

/* Enhanced gradient text animation */
@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.gradient-title {
  background: linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-size: 200% 100%;
  animation: gradient-x 4s ease infinite;
}

/* Card hover effects with enhanced shadows */
.card-enhanced {
  @apply transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-sm border-white/10;
}

.card-enhanced:hover {
  background: linear-gradient(
    135deg,
    rgba(var(--primary), 0.05) 0%,
    rgba(var(--accent), 0.05) 100%
  );
}

/* Icon container with glow */
.icon-glow {
  @apply p-3 rounded-xl shadow-lg transition-all duration-300;
  background: linear-gradient(135deg, rgb(var(--primary)), rgb(var(--accent)));
  box-shadow: 0 0 15px rgba(var(--primary), 0.5);
}

.icon-glow:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 10px 30px rgba(var(--primary), 0.4);
}

/* Floating animation for profile avatar */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

.floating {
  animation: float-gentle 3s ease-in-out infinite;
}

/* Enhanced border animation */
.border-animated {
  position: relative;
  overflow: hidden;
}

.border-animated::before {
  content: '';
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgb(var(--primary)), transparent);
  animation: borderSlide 2s linear infinite;
}

@keyframes borderSlide {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Social link hover effects */
.social-link {
  @apply p-2 rounded-lg transition-all duration-300 hover:bg-primary/5;
}

.social-link:hover {
  transform: translateX(5px);
}

/* Animation Keyframes */
@keyframes pulse-glow {
  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 10px rgba(var(--primary), 0.5);
  }
  50% {
    opacity: 0.8;
    box-shadow: 0 0 20px rgba(var(--primary), 0.8);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradient-x {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Enhanced fade in animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Pulse glow for important elements */
@keyframes pulseGlow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(var(--primary), 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(var(--primary), 0.6);
  }
}

.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Slow spinning animation for background */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-gradient-x {
  background-size: 300% 300%;
  animation: gradientShift 4s ease infinite;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Background decorative elements */
.bg-decoration {
  position: absolute;
  pointer-events: none;
  opacity: 0.1;
}

.bg-decoration-1 {
  top: 10%;
  left: 5%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgb(var(--primary)), transparent);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.bg-decoration-2 {
  bottom: 10%;
  right: 5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgb(var(--accent)), transparent);
  border-radius: 50%;
  animation: float 8s ease-in-out infinite reverse;
}

/* Background Grid Pattern */
.bg-grid-pattern {
  background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0);
  background-size: 20px 20px;
}
</style>
