<template>
  <div class="min-h-screen py-20 relative overflow-hidden">
    <!-- Enhanced Animated Background with more vibrant elements -->
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

      <!-- New background elements for more visual interest -->
      <div
        class="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse delay-500"
      ></div>
      <div
        class="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-1500"
      ></div>

      <!-- Add subtle grid pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <!-- Add floating particles -->
      <div class="particles">
        <div class="particle" style="--delay: 0s; --duration: 8s; --x: 20%; --y: 80%"></div>
        <div class="particle" style="--delay: 2s; --duration: 10s; --x: 80%; --y: 20%"></div>
        <div
          class="particle particle-accent"
          style="--delay: 2.5s; --duration: 8.5s; --x: 30%; --y: 60%"
        ></div>
        <div
          class="particle particle-green"
          style="--delay: 1.5s; --duration: 7.5s; --x: 70%; --y: 30%"
        ></div>
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto space-y-12 fade-in">
        <!-- Enhanced Header with more vibrant gradients -->
        <div class="text-center space-y-6">
          <div class="relative">
            <h1
              class="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent animate-gradient-x"
            >
              Get In Touch
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
              Have a project in mind? Let's discuss how we can work together to bring your ideas to
              life
            </p>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Enhanced Contact Form with more visual effects -->
          <Card class="p-8 card-enhanced backdrop-blur-md border border-white/10">
            <div class="space-y-6">
              <div class="flex items-center gap-3 mb-6">
                <div
                  class="w-12 h-12 rounded-full bg-gradient-to-r from-primary via-accent to-purple-500 flex items-center justify-center shadow-md animate-pulse"
                >
                  <Send class="w-6 h-6 text-white" />
                </div>
                <h2 class="text-2xl font-bold gradient-title">Send me a message</h2>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="space-y-2">
                  <label for="name" class="text-sm font-medium flex items-center gap-2">
                    <User class="w-4 h-4 text-primary" />
                    Name
                  </label>
                  <div class="relative group">
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg blur opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                    ></div>
                    <Input
                      id="name"
                      v-model="form.name"
                      placeholder="Your full name"
                      required
                      class="relative z-10 bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/40 transition-all duration-300"
                    />
                  </div>
                </div>

                <div class="space-y-2">
                  <label for="email" class="text-sm font-medium flex items-center gap-2">
                    <Mail class="w-4 h-4 text-accent" />
                    Email
                  </label>
                  <div class="relative group">
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg blur opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                    ></div>
                    <Input
                      id="email"
                      v-model="form.email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      class="relative z-10 bg-background/80 backdrop-blur-sm border-accent/20 focus:border-accent/40 transition-all duration-300"
                    />
                  </div>
                </div>

                <div class="space-y-2">
                  <label for="subject" class="text-sm font-medium flex items-center gap-2">
                    <FileText class="w-4 h-4 text-purple-500" />
                    Subject
                  </label>
                  <div class="relative group">
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-lg blur opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                    ></div>
                    <Input
                      id="subject"
                      v-model="form.subject"
                      placeholder="What's this about?"
                      required
                      class="relative z-10 bg-background/80 backdrop-blur-sm border-purple-500/20 focus:border-purple-500/40 transition-all duration-300"
                    />
                  </div>
                </div>

                <div class="space-y-2">
                  <label for="message" class="text-sm font-medium flex items-center gap-2">
                    <MessageSquare class="w-4 h-4 text-blue-500" />
                    Message
                  </label>
                  <div class="relative group">
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-lg blur opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                    ></div>
                    <Textarea
                      id="message"
                      v-model="form.message"
                      placeholder="Tell me about your project or how I can help you..."
                      rows="5"
                      required
                      class="relative z-10 bg-background/80 backdrop-blur-sm border-blue-500/20 focus:border-blue-500/40 transition-all duration-300"
                    ></Textarea>
                  </div>
                </div>

                <div>
                  <div class="relative group">
                    <div
                      class="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"
                    ></div>
                    <Button
                      type="submit"
                      class="relative w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      :disabled="formSubmitting"
                    >
                      <Send v-if="!formSubmitting" class="w-4 h-4" />
                      <Loader2 v-else class="w-4 h-4 animate-spin" />
                      {{ formSubmitting ? 'Sending...' : 'Send Message' }}
                    </Button>
                  </div>
                </div>
              </form>

              <!-- Success Message with enhanced animation -->
              <div v-if="formSubmitted" class="mt-6 animate-bounce-in">
                <div
                  class="p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start gap-3"
                >
                  <CheckCircle class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-green-500">Message sent successfully!</p>
                    <p class="text-sm text-muted-foreground">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Error Message with enhanced animation -->
              <div v-if="formError" class="mt-6 animate-shake">
                <div
                  class="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3"
                >
                  <AlertCircle class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-red-500">Failed to send message</p>
                    <p class="text-sm text-muted-foreground">{{ formError }}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <!-- Enhanced Contact Information with icons and animations -->
          <div class="space-y-6">
            <Card class="p-6 card-enhanced">
              <CardHeader class="pb-4">
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-full bg-gradient-to-r from-primary via-accent to-purple-500 flex items-center justify-center shadow-md animate-pulse"
                  >
                    <MapPin class="w-5 h-5 text-white" />
                  </div>
                  <CardTitle class="gradient-title">Contact Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent class="space-y-6">
                <div class="space-y-4">
                  <div
                    class="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-gradient-to-r from-green-500/80 to-emerald-500/80 flex items-center justify-center shadow-md"
                    >
                      <Mail class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p class="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:derricsamson17@gmail.com"
                        class="font-medium hover:text-primary transition-colors"
                      >
                        derricsamson17@gmail.com
                      </a>
                    </div>
                  </div>

                  <div
                    class="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600/80 to-blue-800/80 flex items-center justify-center shadow-md"
                    >
                      <Linkedin class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p class="text-sm text-muted-foreground">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/derric-samson-409a642b9"
                        target="_blank"
                        class="font-medium hover:text-primary transition-colors"
                      >
                        linkedin.com/in/derric-samson-409a642b9
                      </a>
                    </div>
                  </div>

                  <div
                    class="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-gradient-to-r from-gray-600/80 to-gray-800/80 flex items-center justify-center shadow-md"
                    >
                      <Github class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p class="text-sm text-muted-foreground">GitHub</p>
                      <a
                        href="https://github.com/Derric01"
                        target="_blank"
                        class="font-medium hover:text-primary transition-colors"
                      >
                        github.com/Derric01
                      </a>
                    </div>
                  </div>

                  <div
                    class="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600/80 to-pink-600/80 flex items-center justify-center shadow-md"
                    >
                      <Instagram class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p class="text-sm text-muted-foreground">Instagram</p>
                      <a
                        href="https://instagram.com/derric_mars"
                        target="_blank"
                        class="font-medium hover:text-primary transition-colors"
                      >
                        @derric_mars
                      </a>
                    </div>
                  </div>

                  <div
                    class="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600/80 to-purple-600/80 flex items-center justify-center shadow-md"
                    >
                      <MessageCircle class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p class="text-sm text-muted-foreground">Discord</p>
                      <a
                        href="https://discord.com/users/1266316116016238707"
                        target="_blank"
                        class="font-medium hover:text-primary transition-colors"
                      >
                        Derric#1266
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <!-- Enhanced Availability Card -->
            <Card class="p-6 card-enhanced">
              <CardHeader class="pb-4">
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-md animate-pulse"
                  >
                    <Clock class="w-5 h-5 text-white" />
                  </div>
                  <CardTitle class="gradient-title">Availability</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div class="space-y-3">
                  <div class="flex items-start gap-3">
                    <Calendar class="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p class="font-medium">Available for new projects</p>
                      <p class="text-sm text-muted-foreground">
                        Currently accepting new client projects and collaborations
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <Clock class="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p class="font-medium">Response Time</p>
                      <p class="text-sm text-muted-foreground">
                        I typically respond to inquiries within 24-48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import emailjs from '@emailjs/browser'
import {
  Send,
  Mail,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Calendar,
  Loader2,
  Instagram,
  MessageCircle,
  User,
  FileText,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from 'lucide-vue-next'
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Textarea from '@/components/ui/Textarea.vue'

// Form state
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const formSubmitting = ref(false)
const formSubmitted = ref(false)
const formError = ref('')

// EmailJS configuration
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// Initialize EmailJS
onMounted(() => {
  emailjs.init(PUBLIC_KEY)
})

// Form submission handler
const handleSubmit = async () => {
  // Basic form validation
  if (!form.name || !form.email || !form.subject || !form.message) {
    formError.value = 'Please fill in all fields'
    return
  }
  
  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    formError.value = 'Please enter a valid email address'
    return
  }

  formSubmitting.value = true
  formError.value = ''

  try {
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    }
    
    console.log('Sending email with params:', {
      serviceID: SERVICE_ID,
      templateID: TEMPLATE_ID,
      params: templateParams,
    })
    
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    )

    formSubmitted.value = true
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (error: any) {
    console.error('EmailJS error:', error)
    formError.value = error?.text || 'There was an error sending your message. Please try again.'
  } finally {
    formSubmitting.value = false
  }
}
</script>

<style scoped>
.fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

.animate-gradient-x {
  background-size: 300% 300%;
  animation: gradientShift 4s ease infinite;
}

.gradient-title {
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease infinite;
}

/* Enhanced styles for Contact Page */
.card-enhanced {
  transition: all 0.5s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
}

.card-enhanced:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 8px 30px rgba(0, 100, 255, 0.2);
}

/* Particle System */
.particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  border-radius: 50%;
  opacity: 0;
  animation: particle var(--duration) infinite var(--delay);
  left: var(--x);
  top: var(--y);
}

.particle-accent {
  background: linear-gradient(45deg, #36d1dc, #5b86e5);
}

.particle-green {
  background: linear-gradient(45deg, #00b09b, #96c93d);
}

/* Card hover effects with enhanced shadows */
.card-enhanced {
  transition-property: all;
  transition-duration: 500ms;
  backdrop-filter: blur(4px);
  border-color: rgba(255, 255, 255, 0.1);
}

.card-enhanced:hover {
  box-shadow: 0 25px 50px -12px rgba(var(--primary), 0.2);
  transform: translateY(-8px) scale(1.02);
  background: linear-gradient(
    135deg,
    rgba(var(--primary), 0.05) 0%,
    rgba(var(--accent), 0.05) 100%
  );
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
  animation: pulseGlow 3s ease-in-out infinite;
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

/* New animations for form success/error messages */
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }
  50% {
    opacity: 1;
    transform: scale(1.05) translateY(-10px);
  }
  100% {
    transform: scale(1) translateY(0);
  }
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-4px);
  }
  50% {
    transform: translateX(4px);
  }
  75% {
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-bounce-in {
  animation: bounce-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.animate-shake {
  animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .bg-grid-pattern {
    background-image:
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(180deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  }
}
</style>
